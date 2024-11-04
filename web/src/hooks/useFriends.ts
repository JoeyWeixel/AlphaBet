import useHttp from "@/hooks/useHttp.ts";

export type FriendRequest = {
    targetId: string;
}

export type Friend = {
    userId: string;
    username: string;
}

const useFriends = () => {
    const { post, getMany } = useHttp();

    const addFriend = async (req : FriendRequest) => post<Friend, FriendRequest>(req, `friends/`)

    const getMyFriends = async () => getMany<Friend>(`friends/me`);

    const searchFriends = async (search: string) => getMany<Friend>(`friends/search?query=${search}`);

    const getMyFriendRequests = async () => getMany<Friend>(`friends/me/requests`);

    return { addFriend, getMyFriends, searchFriends, getMyFriendRequests }
}

export default useFriends;