using System.Security.Claims;
using api.Data;
using api.Domain;
using api.Endpoints.User;
using api.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;

namespace api.Endpoints.Friendship;

public class FriendshipServices(
    AlphabetDbContext db,
    ILogger<UserServices> logger,
    ClaimsPrincipal principal,
    IConfiguration config)
    : BaseService(db, logger, principal, config)
{
    public async Task<ICollection<ApplicationUser>> GetMyFriendships()
    {
        var id = Principal.GetObjectId() ?? throw Logger.OidNotFound();
        return await GetFriendships(new Guid(id));
    }
    
    public async Task<ICollection<ApplicationUser>> GetFriendships(Guid id)
    {
        var friendships = await Db.Friendships
            .Where(f => (f.RequesterId == id || f.ReceiverId == id) && f.IsAccepted)
            .Include(f => f.Requester)
            .Include(f => f.Receiver)
            .Select(f => f.RequesterId == id ? f.Receiver : f.Requester) // Returns only the user object of the friend
            .ToListAsync();
        return friendships;
    }
    
    public async Task<ICollection<ApplicationUser>> GetMyFriendRequests()
    {
        var id = Principal.GetObjectId() ?? throw Logger.OidNotFound();
        return await GetFriendRequests(new Guid(id));
    }
    
    public async Task<ICollection<ApplicationUser>> GetFriendRequests(Guid id)
    {
        var requests = await Db.Friendships
            .Where(f => f.ReceiverId == id && !f.IsAccepted)
            .Include(f => f.Requester)
            .Select(f => f.Requester)
            .ToListAsync();
        return requests;
    }
    
    public async Task<Domain.Friendship> AddFriend(Guid targetId)
    {
        var userId = new Guid(Principal.GetObjectId() ?? throw Logger.OidNotFound());
        
        var friendship = await Db.Friendships.FirstOrDefaultAsync(f => 
            (f.RequesterId == targetId || f.RequesterId == userId) 
            && 
            (f.ReceiverId == targetId || f.ReceiverId == userId));
        switch (friendship)
        {
            case { IsAccepted: true }:
                return friendship;
            case { IsAccepted: false } when friendship.RequesterId == userId:
                break;
            case { IsAccepted: false } when friendship.ReceiverId == userId:
                friendship.IsAccepted = true;
                friendship.AcceptedAt = DateTime.Now;
                Db.Friendships.Update(friendship);
                break;
            case null:
            {
                var requester = await Db.Users
                    .FirstOrDefaultAsync(u => u.UserId == userId) ?? throw Logger.UserNotFound(userId);
                var receiver = await Db.Users
                    .FirstOrDefaultAsync(u => u.UserId == targetId) ?? throw Logger.UserNotFound(targetId);
                friendship = new Domain.Friendship
                {
                    Requester = requester,
                    RequesterId = userId,
                    Receiver = receiver,
                    ReceiverId = targetId,
                    RequestedAt = DateTime.Now,
                    IsAccepted = false
                };
                await Db.Friendships.AddAsync(friendship);
                break;
            }
        }
        await Db.SaveChangesAsync();
        return friendship;
    }
    
    public async Task<ICollection<ApplicationUser>> SearchForFriends(string query)
    {
        if (query.Length < 3)
        {
            throw Logger.QueryTooShort(query);
            return null;
        }
        var friends = await Db.Users
            .Where(u => EF.Functions.Contains(u.Username, query))
            .Take(20)
            .ToListAsync();
        return friends;
    }
}