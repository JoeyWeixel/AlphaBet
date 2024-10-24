namespace api.Domain;

public class Friendship
{
    public required Guid RequesterId { get; init; }
    public required ApplicationUser Requester { get; init; }
    public required Guid ReceiverId { get; init; }
    public required ApplicationUser Receiver { get; init; }
    
    public required bool IsAccepted { get; set; }
    public required DateTime RequestedAt { get; init; }
    public DateTime? AcceptedAt { get; set; }
}