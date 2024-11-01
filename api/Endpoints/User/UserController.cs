using api.Endpoints.User.RequestResponse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Exception = api.Exceptions.Exception;

namespace api.Endpoints.User;

[ApiController]
[Authorize]
[Route("/users")]
public class UserController(UserServices service) : BaseApiController
{
    [HttpGet ("/me")]
    public async Task<IActionResult> GetMe()
    {
        try
        {
            var user = await service.GetMe();
            var response = new UserResponse
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Username = user.Username
            };
            return Ok(user);
        }
        catch (Exception ex)
        {
            return HandleException(ex);
        }
    }
}