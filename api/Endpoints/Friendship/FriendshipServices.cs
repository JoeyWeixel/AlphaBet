using System.Security.Claims;
using api.Data;
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
    public async Task<ICollection<Domain.ApplicationUser>> GetFriendships(Guid id)
    {
        var friendships = await Db.Friendships
            .Where(f => f.RequesterId == id || f.ReceiverId == id && f.IsAccepted)
            .Include(f => f.Requester)
            .Include(f => f.Receiver)
            .Select(f => f.RequesterId == id ? f.Receiver : f.Requester) // Returns only the user object of the friend
            .ToListAsync();
        return friendships;
    }
    
    public async Task AddFriend(Guid requesterId, Guid receiverId)
    {
        if (requesterId != new Guid(Principal.GetObjectId() ?? throw Logger.OidNotFound())) throw Logger.UserUnauthorized(requesterId);
        
        var friendship = await Db.Friendships.FirstOrDefaultAsync(f => f.RequesterId == requesterId && f.ReceiverId == receiverId);
        if (friendship != null && friendship.RequesterId == requesterId)
        {
            friendship.IsAccepted = true;
            friendship.AcceptedAt = DateTime.Now;
            Db.Friendships.Update(friendship);
        }
        else
        {
            var requester = await Db.Users
                .FirstOrDefaultAsync(u => u.UserId == requesterId) ?? throw Logger.UserNotFound(requesterId);
            var receiver = await Db.Users
                .FirstOrDefaultAsync(u => u.UserId == receiverId) ?? throw Logger.UserNotFound(receiverId);
            friendship = new Domain.Friendship
            {
                Requester = requester,
                RequesterId = requesterId,
                Receiver = receiver,
                ReceiverId = receiverId,
                RequestedAt = DateTime.Now,
                IsAccepted = false
            };
            await Db.Friendships.AddAsync(friendship);
        }
        await Db.SaveChangesAsync();
    }
}