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
            var response = friends.Select(f => new FriendshipResponse
            {
                UserId = f.UserId,
                Username = f.Username
            });
            return Ok(response);
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
    
    [HttpGet("search")]
    public async Task<IActionResult> SearchForFriends([FromQuery] string query)
    {
        try
        {
            var friends = await service.SearchForFriends(query);
            var response = friends.Select(f => new FriendshipResponse
            {
                UserId = f.UserId,
                Username = f.Username
            });
            return Ok(response);
        }
        catch (Exception ex)
        {
            return HandleException(ex);
        }
    }
}