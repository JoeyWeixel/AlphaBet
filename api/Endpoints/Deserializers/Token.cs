using System.Text.Json.Serialization;

namespace api.Endpoints.Deserializers;

public class Token
{
    [JsonPropertyName("token_type")]
    public required string TokenType { get; set; }
    
    [JsonPropertyName("expires_in")]
    public int ExpiresIn { get; set; }
    
    [JsonPropertyName("ext_expires_in")]
    public int ExtExpiresIn { get; set; }
    
    [JsonPropertyName("access_token")]
    public required string AccessToken { get; set; }
}