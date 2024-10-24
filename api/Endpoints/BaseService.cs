using System.Security.Claims;
using System.Net.Http.Headers;
using System.Text.Json.Serialization;
using api.Data;

namespace api.Endpoints
{
    public abstract class BaseService(
        AlphabetDbContext db,
        ILogger<BaseService> logger,
        ClaimsPrincipal principal,
        IConfiguration config)
    {
        protected AlphabetDbContext Db { get; } = db;
        protected ILogger<BaseService> Logger { get; } = logger;
        public ClaimsPrincipal Principal { get; } = principal;
        public IConfiguration Config { get; } = config;
    }
    
}
