using System.Security.Claims;
using System.Net.Http.Headers;
using System.Text.Json.Serialization;

namespace api.Endpoints
{
    public abstract class BaseService
    {
        
        private readonly ILogger<BaseService> _logger;
        private readonly IConfiguration _config;

        public ILogger<BaseService> Logger => _logger;
        public IConfiguration Config => _config;


        

       
        public BaseService(ILogger<BaseService> logger, IConfiguration config)
        {
            _logger = logger;
            _config = config;
        }
    }
    
}
