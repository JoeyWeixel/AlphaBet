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
    [HttpGet("me")]
    public async Task<IActionResult> GetMyFriends()
    {
        try
        {
            var friends = await service.GetMyFriendships();
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
    
    [HttpGet("me/requests")]
    public async Task<IActionResult> GetMyFriendRequests()
    {
        try
        {
            var requests = await service.GetMyFriendRequests();
            var response = requests.Select(r => new FriendshipResponse
            {
                UserId = r.UserId,
                Username = r.Username
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
            var targetGuid = new Guid(req.TargetId);
            var friendship = await service.AddFriend(targetGuid);
            var response = new FriendshipResponse
            {
                UserId = friendship.RequesterId == targetGuid ? friendship.RequesterId : friendship.ReceiverId,
                Username = friendship.RequesterId == targetGuid
                    ? friendship.Requester.Username
                    : friendship.Receiver.Username
            };
            return Ok(response);
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