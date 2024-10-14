import {Button} from "@/components/ui/button.tsx";
import {useMsal} from "@azure/msal-react";
import React from "react";

const SignInButton : React.FC = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect();
    }

    return (
        <Button
            variant="default"
            onClick={() => handleSignIn()}
        >
            Sign In
        </Button>
    );
}

export default SignInButton;