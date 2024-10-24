using Azure.Identity;

namespace api.Endpoints.Friendship.RequestResponse;

public class FriendshipResponse
{
    public required string Username { get; set; }
    public required Guid UserId { get; set; }
}