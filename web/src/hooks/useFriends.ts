import useHttp from "@/hooks/useHttp.ts";

export type FriendRequest = {
    requesterId: string;
    receiverId: string;
}

export type FriendResponse = {
    id: string;
    userName: string;
}

const useFriends = () => {
    const { post, getMany } = useHttp();

    const addFriend = async (req : FriendRequest) => post<FriendResponse, FriendRequest>(req, `friends/`)

    const getMyFriends = async () => getMany<FriendResponse>(`friends/me`);

    const searchFriends = async (search: string) => getMany<FriendResponse>(`friends/search?query=${search}`);

    return { addFriend, getMyFriends, searchFriends }
}

export default useFriends;