using api.Exceptions;
using Exception = api.Exceptions.Exception;

namespace api.Logging;

public static class FriendshipLogging
{
    public static readonly Action<ILogger, Guid, Guid, Exception> _friendshipNotFound;
    
    static FriendshipLogging()
    {
        _friendshipNotFound = LoggerMessage.Define<Guid, Guid>(
            LogLevel.Error,
            new EventId(10001, "FriendshipNotFound"),
            "Friendship not found: Requester Id {userId}, Receiver Id {friendId}"
        );
    }
    
    public static Exception FriendshipNotFound(this ILogger logger, Guid RequesterId, Guid ReceiverId)
    {
        var ex = new NotFoundException(10001, "Friendship not found.");
        _friendshipNotFound(logger, RequesterId, ReceiverId, ex);
        return ex;
    }
}