namespace api.Endpoints.Friendship.RequestResponse;

public class FriendshipRequest
{
    public required Guid RequesterId { get; set; }
    public required Guid ReceiverId { get; set; }
}