import {Button} from "@/components/ui/button.tsx";
import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../../../authConfig.ts";
import React from "react";

const SignInButton : React.FC = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect({
            ...loginRequest,
            redirectUri: "/auth"
        }).then();
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