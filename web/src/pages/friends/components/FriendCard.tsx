import useFriends, {Friend, FriendRequest} from "@/hooks/useFriends.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

export type FriendCardProps = {
    friend: Friend;
    type: "request" | "friend" | "search";
}

const FriendCard: React.FC<FriendCardProps> = ({ friend, type }) => {
    const queryClient = useQueryClient();
    const { addFriend } = useFriends();

    const addFriendMutation = useMutation(
        {
            mutationKey: ["post", "friends"],
            mutationFn: async (req : FriendRequest) => {
              return await addFriend(req);
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["get", "friends"]
                });
                queryClient.invalidateQueries({
                    queryKey: ["get", "friends", "requests"]
                });
            },
        }
    )

    return (
        <Card className="flex">
            <CardContent className="w-full flex justify-between items-center py-2">
                <h1>{friend.username}</h1>
                {type != "friend" && <Button onClick={() => addFriendMutation.mutate({ targetId: friend.userId })}>
                    {type == "request" ? "Accept" : "+"}
                </Button>}
            </CardContent>
        </Card>
    );
}

export default FriendCard;