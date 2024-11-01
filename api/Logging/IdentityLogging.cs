using api.Exceptions;
using Exception = api.Exceptions.Exception;

namespace api.Logging;

public static class IdentityLogging
{
    public static readonly Action<ILogger, Exception> _oidNotFound;
    public static readonly Action<ILogger, Exception> _displayNameNotFound;
    
    static IdentityLogging()
    {
        _oidNotFound = LoggerMessage.Define(
            LogLevel.Error,
            new EventId(00000, "OidNotFound"),
            "Object ID not found in claims"
        );
        _displayNameNotFound = LoggerMessage.Define(
            LogLevel.Error,
            new EventId(00001, "DisplayNameNotFound"),
            "Display name not found in claims"
        );
    }
    
    public static Exception OidNotFound(this ILogger logger)
    {
        var ex = new UnauthorizedException(10001, "Object ID claim not found.");
        _oidNotFound(logger, ex);
        return ex;
    }
    
    public static Exception DisplayNameNotFound(this ILogger logger)
    {
        var ex = new UnauthorizedException(10001, "Display Name claim not found.");
        _displayNameNotFound(logger, ex);
        return ex;
    }
}