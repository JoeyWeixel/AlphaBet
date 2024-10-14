import {Button} from "@/components/ui/button.tsx";
import {useMsal} from "@azure/msal-react";
import React from "react";

const SignOutButton : React.FC = () => {
    const { instance } = useMsal();

    const handleSignOut = () => {
        instance.logoutRedirect({
            account: instance.getActiveAccount(),
            postLogoutRedirectUri: "/",
        }).then();
    }

    return (
        <Button
            variant="default"
            onClick={() => handleSignOut()}
        >
            Sign Out
        </Button>
    );
}

export default SignOutButton;