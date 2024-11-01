using System.Text.Json.Serialization;

namespace api.Endpoints.User.RequestResponse;

public class GraphUserResponse
{
    public required string Mail { get; set; }
    
    public required string GivenName { get; set; }
    
    public required string Surname { get; set; }
    
    public required string DisplayName { get; set; }
    
}