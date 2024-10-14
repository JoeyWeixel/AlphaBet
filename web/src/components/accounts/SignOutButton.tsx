import {Button} from "@/components/ui/button.tsx";
import {useMsal} from "@azure/msal-react";
import React from "react";

const SignOutButton : React.FC = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.logout().then();
    }

    return (
        <Button
            variant="default"
            onClick={() => handleSignIn()}
        >
            Sign Out
        </Button>
    );
}

export default SignOutButton;