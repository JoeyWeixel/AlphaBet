import useHttp from "@/hooks/useHttp.ts";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string | undefined;
}

const useUser = () => {
    const { getOne } = useHttp();

    const getMe = async () => getOne<User>(`users/me`)

    return { getMe }
}

export default useUser