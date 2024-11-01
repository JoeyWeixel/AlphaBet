using System.Net.Http.Headers;
using System.Security.Claims;
using api.Data;
using api.Endpoints.Deserializers;

namespace api.Endpoints;

public abstract class BaseService(
    AlphabetDbContext db,
    ILogger<BaseService> logger,
    ClaimsPrincipal principal,
    IConfiguration config)
{
    protected AlphabetDbContext Db { get; } = db;
    protected ILogger<BaseService> Logger { get; } = logger;
    protected ClaimsPrincipal Principal { get; } = principal;
    public IConfiguration Config { get; } = config;

    public async Task<HttpClient> GetGraphClient()
    {
        var tokenGetter = new HttpClient();

        var response = await tokenGetter.PostAsync(
            "https://login.microsoftonline.com/" + Config["AzureAdB2C:TenantId"] + "/oauth2/v2.0/token",
            new FormUrlEncodedContent(new Dictionary<string, string>
                {
                    { "client_id", Config["AzureAdB2C:ClientId"] },
                    { "scope", "https://graph.microsoft.com/.default" },
                    { "client_secret", Config["AzureAdB2C:ClientSecret"] },
                    { "grant_type", "client_credentials" }
                })
            );

        response.EnsureSuccessStatusCode();
        var token = await response.Content.ReadFromJsonAsync<Token>() ?? throw new Exception("Token deserialization failed for MS Graph");
        
        var graph = new HttpClient();
        graph.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(token.TokenType, token.AccessToken);
        graph.BaseAddress = new Uri("https://graph.microsoft.com/v1.0/");
        return graph;
    }
}
