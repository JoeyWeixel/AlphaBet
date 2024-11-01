// import {useMsal} from "@azure/msal-react";
// import {useEffect} from "react";
// import {useMutation, useQueryClient} from "@tanstack/react-query";

const Auth : React.FC = () => {
    // const { instance } = useMsal();

    // useEffect(() => {
    //     let user = instance.getActiveAccount();
    //     if (user) {
    //         const accessTokenRequest = {
    //             scopes: ["https://alphabetorg.onmicrosoft.com/api/User.Read", "https://alphabetorg.onmicrosoft.com/api/User.Write"],
    //             account: user,
    //         };
    //         instance.acquireTokenSilent(accessTokenRequest)
    //             .then((response) => console.log(response));
    //     }
    // }, [instance]);

    return (
        <div>
            <h1>Auth</h1>
        </div>
    );
}

export default Auth;