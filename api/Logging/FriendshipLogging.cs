using api.Exceptions;
using ArgumentException = api.Exceptions.ArgumentException;
using Exception = api.Exceptions.Exception;

namespace api.Logging;

public static class FriendshipLogging
{
    private static readonly Action<ILogger, Guid, Guid, Exception> _friendshipNotFound;
    private static readonly Action<ILogger, string, Exception> _queryTooShort;
    
    static FriendshipLogging()
    {
        _friendshipNotFound = LoggerMessage.Define<Guid, Guid>(
            LogLevel.Error,
            new EventId(20000, "FriendshipNotFound"),
            "Friendship not found: Requester Id {userId}, Receiver Id {friendId}"
        );
        _queryTooShort = LoggerMessage.Define<string>(
            LogLevel.Warning,
            new EventId(20001, "QueryTooShort"),
            "Query too short: {query}"
        );
    }
    
    public static Exception FriendshipNotFound(this ILogger logger, Guid requesterId, Guid receiverId)
    {
        var ex = new NotFoundException(10001, "Friendship not found: Requester Id " + requesterId + ", Receiver Id " + receiverId);
        _friendshipNotFound(logger, requesterId, receiverId, ex);
        return ex;
    }
    
    public static Exception QueryTooShort(this ILogger logger, string query)
    {
        var ex = new ArgumentException(10002, "Query too short: " + query);
        _queryTooShort(logger, query, ex);
        return ex;
    }
}