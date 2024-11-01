using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace api.Domain;

public class ApplicationUser
{
    public required Guid UserId { get; init; }
    public required string Username { get; init; }
    public required string FirstName { get; init; }
    public required string LastName { get; init; }
    public string? Email { get; init; }

    public required ICollection<Friendship> RequestedFriends
    {
        get;
        init;
    } = new List<Friendship>();

    public required ICollection<Friendship> ReceivedFriends
    {
        get; 
        init;
    } = new List<Friendship>();
}