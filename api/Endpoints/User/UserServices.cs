using System.Security.Claims;
using api.Data;
using api.Domain;
using api.Endpoints.User.RequestResponse;
using api.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;

namespace api.Endpoints.User;

public class UserServices(
    AlphabetDbContext db,
    ILogger<UserServices> logger,
    ClaimsPrincipal principal,
    IConfiguration config)
    : BaseService(db, logger, principal, config)
{
    public async Task<ApplicationUser> GetMe()
    {
        var objectId = new Guid(Principal.GetObjectId() ?? throw Logger.OidNotFound());

        var user = await Db.Users.FirstOrDefaultAsync(u => u.UserId == objectId);
        if (user == null)
        {
            return await AddUser();
        }
        return user;
    }
    
    private async Task<ApplicationUser> AddUser()
    {
        var objectId = new Guid(Principal.GetObjectId() ?? throw Logger.OidNotFound());
        
        var dbUser = await Db.Users.FirstOrDefaultAsync(u => u.UserId == objectId);
        if (dbUser != null) return dbUser;

        var graphClient = await GetGraphClient(); //TODO: Probably a much faster way to scale this, gotta research -Joey

        var graphResponse = await graphClient.GetAsync("users/" + objectId);
        if (!graphResponse.IsSuccessStatusCode) throw Logger.UserGraphIdentityNotFound();
        
        var graphUser = await graphResponse.Content.ReadFromJsonAsync<GraphUserResponse>() 
                        ?? throw Logger.UserGraphIdentityIncomplete();
        
        var newUser = new ApplicationUser
        {
            UserId = objectId,
            Username = graphUser.DisplayName,
            FirstName = graphUser.GivenName,
            LastName = graphUser.Surname,
            Email = graphUser.Mail,
            RequestedFriends = new List<Domain.Friendship>(),
            ReceivedFriends = new List<Domain.Friendship>()
        };
        
        await Db.Users.AddAsync(newUser);
        await Db.SaveChangesAsync();
        return newUser;

    }
}