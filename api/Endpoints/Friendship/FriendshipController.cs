using api.Endpoints.Friendship.RequestResponse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Exception = api.Exceptions.Exception;

namespace api.Endpoints.Friendship;

[ApiController]
[Authorize]
[Route("/friends")]
public class FriendshipController(FriendshipServices service) : BaseApiController
{
    [HttpGet("{id}")]
    public async Task<IActionResult> GetFriends(Guid id)
    {
        try
        {
            var friends = await service.GetFriendships(id);
            return Ok(friends);
        }
        catch (Exception ex)
        {
            return HandleException(ex);
        }
    }
    
    [HttpPost]
    public async Task<IActionResult> AddFriend([FromBody] FriendshipRequest req)
    {
        try
        {
            await service.AddFriend(req.RequesterId, req.ReceiverId);
            return Ok();
        }
        catch (Exception ex)
        {
            return HandleException(ex);
        }
    }
}