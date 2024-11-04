import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import useFriends from "@/hooks/useFriends.ts";
import {useDebounce} from "use-debounce";
import {Input} from "@/components/ui/input.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import FriendCard from "@/pages/friends/components/FriendCard.tsx";

const FriendSearch : React.FC = () => {

    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search.trim(), 1000);
    const { searchFriends } = useFriends();


    const searchQuery = (query : string) => {
        return useQuery({
            queryKey: ["get", "friends", "search", query],
            queryFn: async () => {
                if (query == "" || query.length < 3) {
                    return null;
                }
                return await searchFriends(query);
            }
        })
    }

    const { data: searchResults, isLoading: isSearchLoading } = searchQuery(debouncedSearch);

    return (
        <div >
            <Input
                id="search-input"
                name="search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"Search for friends"}
                className="w-96"
            />
            <ScrollArea className="w-96 flex flex-col">
                {isSearchLoading && <p key={"loading"}>Loading...</p>}
                {searchResults && searchResults.map((friend) => (
                    <FriendCard key={friend.userId} friend={friend} type="search" />
                ))}
            </ScrollArea>
        </div>
    );
}

export default FriendSearch;