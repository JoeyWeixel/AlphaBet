using Exception = api.Exceptions.Exception;
using System;
using Microsoft.Extensions.Logging;
using api.Exceptions;

namespace api.Logging;

public static class UserLogging
{
    private static readonly Action<ILogger, Guid, Exception> _userNotFound;
    private static readonly Action<ILogger, Guid, Exception> _userUnauthorized;
    private static readonly Action<ILogger, Exception> _userGraphIdentityNotFound;
    private static readonly Action<ILogger, Exception> _userGraphIdentityIncomplete;

    static UserLogging()
    {
        _userNotFound = LoggerMessage.Define<Guid>(
            LogLevel.Error,
            new EventId(10000, "UserNotFound"),
            "User not found: User Id {id}"
        );
        _userUnauthorized = LoggerMessage.Define<Guid>(
            LogLevel.Error,
            new EventId(10001, "UserUnauthorized"),
            "User not authorized: User Id {id}"
        );
        _userGraphIdentityNotFound = LoggerMessage.Define(
            LogLevel.Error,
            new EventId(10002, "UserGraphIdentityNotFound"),
            "Graph identity not found for user."
        );
        _userGraphIdentityIncomplete = LoggerMessage.Define(
            LogLevel.Error,
            new EventId(10003, "UserGraphIdentityIncomplete"),
            "Graph identity incomplete for user."
        );
    }

    public static Exception UserNotFound(this ILogger logger, Guid id)
    {
        var ex = new NotFoundException(10000, "User not found.");
        _userNotFound(logger, id, ex);
        return ex;
    }
    
    public static Exception UserUnauthorized(this ILogger logger, Guid id)
    {
        var ex = new UnauthorizedException(10001, "User not authorized.");
        _userUnauthorized(logger, id, ex);
        return ex;
    }
    
    public static Exception UserGraphIdentityNotFound(this ILogger logger)
    {
        var ex = new NotFoundException(10002, "Graph identity not found for user.");
        _userGraphIdentityNotFound(logger, ex);
        return ex;
    }
    
    public static Exception UserGraphIdentityIncomplete(this ILogger logger)
    {
        var ex = new NotFoundException(10003, "Graph identity incomplete for user.");
        _userGraphIdentityIncomplete(logger, ex);
        return ex;
    }
}