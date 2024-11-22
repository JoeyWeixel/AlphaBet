using System.Text.Json.Serialization;

namespace Functions.Interfaces;

public class Markets
{
    [JsonPropertyName("key")]
    string type { get; set; }

    private IEnumerable<Outcomes> outcomes { get; set; }
}