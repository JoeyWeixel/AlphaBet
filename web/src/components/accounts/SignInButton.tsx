import {Button} from "@/components/ui/button.tsx";
import {useMsal} from "@azure/msal-react";
import React from "react";
import {loginRequest} from "../../../authConfig.ts";

const SignInButton : React.FC = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect({
            ...loginRequest
        });
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