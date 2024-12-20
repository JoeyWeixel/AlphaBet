/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {RedirectRequest} from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
    auth: {
        clientId: 'cda32693-0e7b-4086-a808-982ae40057a6', // This is the ONLY mandatory field that you need to supply.
        authority: 'https://alphabetorg.b2clogin.com/alphabetorg.onmicrosoft.com/b2c_1_signup_signin', // Choose SUSI as your default authority.
        knownAuthorities: ['https://alphabetorg.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
        redirectUri: `${import.meta.env.VITE_WEB_ADDRESS}/auth`, // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: `${import.meta.env.VITE_WEB_ADDRESS}`, // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 */
export const loginRequest : RedirectRequest = {
    scopes: ["https://alphabetorg.onmicrosoft.com/api/User.Read",
        "https://alphabetorg.onmicrosoft.com/api/User.Write"],
    redirectUri: `${import.meta.env.VITE_WEB_ADDRESS}/auth`,
};

/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const silentRequest = {
    scopes: ["openid", "profile"],
    loginHint: "example@domain.net",
};
