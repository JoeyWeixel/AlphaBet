import {useMsal} from "@azure/msal-react";
import {useQuery} from "@tanstack/react-query";
import useUser, {User} from "@/hooks/useUser.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Auth : React.FC = () => {
    const { instance } = useMsal();
    const { getMe } = useUser();
    const navigate = useNavigate()

    const { error:  userError,  isLoading: loading} = useQuery<User>({
        queryKey: ["get", "me"],
        queryFn: getMe,
        enabled: instance.getActiveAccount() != null,
    })

    useEffect(() => {
        if (!loading && !userError) {
            navigate("/");
        }
    }, [loading, userError, navigate]);

    return (
        <div>
            <h1>Auth</h1>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default Auth;