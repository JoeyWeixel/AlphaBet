using System.Security.Claims;
using api.Data;
using api.Domain;
using api.Endpoints.User.RequestResponse;
using api.Exceptions;
using api.Logging;
using Microsoft.EntityFrameworkCore;

namespace api.Endpoints.User;

public class UserServices(
    AlphabetDbContext db,
    ILogger<UserServices> logger,
    ClaimsPrincipal principal,
    IConfiguration config)
    : BaseService(db, logger, principal, config)
{
    public async Task<ApplicationUser> GetUserById(Guid id)
    {
        var user = await Db.Users.FirstOrDefaultAsync(u => u.UserId == id) ?? throw Logger.UserNotFound(id);
        return user;
    }
    
    // public async Task<ApplicationUser> PostUser(UserRequest user)
    // {
    //     //TODO
    //     return new ApplicationUser();
    // }
}