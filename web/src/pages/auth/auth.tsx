import {useMsal} from "@azure/msal-react";

const Auth : React.FC = () => {
    const { accounts } = useMsal();

    console.log(accounts);
    return (
        <div>
            <h1>Auth</h1>
        </div>
    );
}

export default Auth;