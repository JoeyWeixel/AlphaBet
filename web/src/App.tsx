import { ThemeProvider } from './components/theme-provider';
import {
    PublicClientApplication,
    EventType,
    EventMessage,
    AuthenticationResult,
} from "@azure/msal-browser";
import { msalConfig } from "../authConfig.ts";
import {AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate} from "@azure/msal-react";
import {RouterProvider} from "react-router-dom";
import UnauthenticatedRouter from "@/components/navigation/Routing/UnauthenticatedRouter.tsx";
import AuthenticatedRouter from "@/components/navigation/Routing/AuthenticatedRouter.tsx";

const msalInstance = new PublicClientApplication(msalConfig);

//get initialize msalInstance
msalInstance.initialize().then();

const activeAccount = msalInstance.getActiveAccount();

if (!activeAccount) {
    // Account selection
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
    }
}

//set the account
msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const authenticationResult = event.payload as AuthenticationResult;
        const account = authenticationResult.account;
        msalInstance.setActiveAccount(account);
    }
});

//enable account storage event
msalInstance.enableAccountStorageEvents();

function App() {
    return (
        <MsalProvider instance={msalInstance}>
            <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
                <UnauthenticatedTemplate>
                    <RouterProvider router={UnauthenticatedRouter} />
                </UnauthenticatedTemplate>
                <AuthenticatedTemplate>
                    <RouterProvider router={AuthenticatedRouter} />
                </AuthenticatedTemplate>
            </ThemeProvider>
        </ MsalProvider>
    )
}

export default App
