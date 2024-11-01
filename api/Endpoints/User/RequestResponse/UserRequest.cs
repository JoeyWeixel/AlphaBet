namespace api.Endpoints.User.RequestResponse;

public class UserRequest
{
    public required Guid UserId { get; set; }
    public required string Username { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public string? Email { get; set; }
}