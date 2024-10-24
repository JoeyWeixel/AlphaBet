using Exception = api.Exceptions.Exception;
using System;
using Microsoft.Extensions.Logging;
using api.Exceptions;

namespace api.Logging;

public static class UserLogging
{
    private static readonly Action<ILogger, Guid, Exception> _userNotFound;

    static UserLogging()
    {
        _userNotFound = LoggerMessage.Define<Guid>(
            LogLevel.Error,
            new EventId(10000, "UserNotFound"),
            "User not found: User Id {id}"
        );
    }

    public static Exception UserNotFound(this ILogger logger, Guid id)
    {
        var ex = new NotFoundException(10000, "User not found.");
        _userNotFound(logger, id, ex);
        return ex;
    }
}