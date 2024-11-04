import useFriends, {Friend} from "@/hooks/useFriends.ts";
import {useQuery} from "@tanstack/react-query";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import FriendCard from "@/pages/friends/components/FriendCard.tsx";
import FriendSearch from "@/pages/friends/components/FriendSearch.tsx";
import Header from "@/components/Header.tsx";

const FriendPage : React.FC = () => {
    const { getMyFriends, getMyFriendRequests } = useFriends();

    const { data: friends, isLoading: isFriendsLoading } = useQuery<Friend[]>({
        queryKey: ["get", "friends"],
        queryFn: getMyFriends,
    })

    const { data: friendRequests, isLoading: isFriendRequestsLoading } = useQuery<Friend[]>({
        queryKey: ["get", "friends", "requests"],
        queryFn: getMyFriendRequests,
    })

    return (
        <div className="flex min-h-screen w-full flex-col gap-y-4 items-center flex-wrap">
            <Header />
            <FriendSearch />
            <ScrollArea>
                <h1>Friend Requests</h1>
                {isFriendRequestsLoading && <p>Loading...</p>}
                {friendRequests && friendRequests.map((friend) => (
                    <FriendCard key={friend.userId} friend={friend} type={"request"} />
                ))}
            </ScrollArea>

            <ScrollArea>
                <h1>Friends</h1>
                {isFriendsLoading && <p>Loading...</p>}
                {friends && friends.map((friend) => (
                    <FriendCard key={friend.userId} friend={friend} type={"friend"} />
                ))}
            </ScrollArea>
        </div>
    );
}

export default FriendPage;