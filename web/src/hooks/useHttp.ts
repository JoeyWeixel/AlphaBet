/* eslint-disable no-unused-expressions */
import axios from 'axios'
import {useMsal} from "@azure/msal-react";

const useHttp = () => {
    const { instance } = useMsal();
    const apiUri = import.meta.env.VITE_API_ADDRESS;

    const acquireToken = async () => {
        let user = instance.getActiveAccount();
        if (user) {
            const accessTokenRequest = {
                scopes: ["https://alphabetorg.onmicrosoft.com/api/User.Read", "https://alphabetorg.onmicrosoft.com/api/User.Write"],
                account: user,
            };
            return instance.acquireTokenSilent(accessTokenRequest);
        }
        return null;
    }

    const getOne = async <T>(relativeUri: string): Promise<T> => {
        const token = acquireToken();
        const response = await axios.get<T>(`${apiUri}/${relativeUri}`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        return response.data as T
    }

    const getMany = async <T>(relativeUri: string): Promise<T[]> => {
        const token = acquireToken();

        const response = await axios.get<T[]>(`${apiUri}/${relativeUri}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    }

    const post = async <T, S>(rq: S, relativeUri: string): Promise<T> => {
        const token = acquireToken();
        const response = await axios.post<T>(`${apiUri}/${relativeUri}`, rq, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data as T;
    }

    const patch = async <T, S>(rq: S, relativeUri: string): Promise<T> => {
        const token = acquireToken();
        const response = await axios.patch<T>(`${apiUri}/${relativeUri}`, rq, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    }

    const put = async <T, S>(rq: S, relativeUri: string): Promise<T> => {
        const token = acquireToken();
        const response = await axios.put<T>(`${apiUri}/${relativeUri}`, rq, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    }

    const deleteOne = async <T>(relativeUri: string): Promise<T> => {
        const token = acquireToken();
        const response = await axios.delete<T>(`${apiUri}/${relativeUri}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    }
    return { getOne, getMany, post, patch, put, deleteOne }
}

export default useHttp
