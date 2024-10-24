using System.ComponentModel.DataAnnotations;

namespace api.Domain;

public class ApplicationUser
{
    public required Guid UserId { get; init; }
    public required string Username { get; init; }
    public required string FirstName { get; init; }
    public required string LastName { get; init; }
    public required string Email { get; init; }
    public required ICollection<Friendship> RequestedFriends { get; init; }
    public required ICollection<Friendship> ReceivedFriends { get; init; } 
}