import localforage from "localforage";
import type { 
    LoginResponse, 
    PrivatePagesLoaderData, 
    User,
    AdminLoaderData 
} from "../types";
import backendApi from "../api/backendApi";
import { redirect } from "react-router-dom";


export const checkAuthStatus = async (): Promise<{ 
    user: User | null; 
    token: string | null 
}> => {
    try {
        const storedToken = await localforage.getItem<string>('authToken');
        const storedUserJson = await localforage.getItem<string>('user');

        if (storedToken && storedUserJson) {
            try {
                const parsedUser: User = JSON.parse(storedUserJson);
                return { user: parsedUser, token: storedToken };
            } catch (error) {
                console.error("Failed to parse stored user data in loader check: ", error);

                await localforage.removeItem('authToken');
                await localforage.removeItem('user');

                return { user: null, token: null };
            }
        }
        
        return { user: null, token: null };
    } catch (error) {
        console.error("Error checking auth status in loader: ", error);
        return { user: null, token: null };
    }
}


export const loginUser = async (
    credentials: { 
        email: string; 
        password: string
    }): Promise<LoginResponse> => {
        console.log("API: Attempting login for: ", credentials.email);
        const response = await backendApi.post<LoginResponse>('/login', credentials);

        return response.data;
};


// Could be used by loaders for stricter checks
export const verifyToken = async (token: string): Promise<User> => {
    console.log("API: Verifying token with backend...");
    const response = await backendApi.get<User>('/user-profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};


export const privatePagesLoader = async (): Promise<PrivatePagesLoaderData | Response> => {
    console.log("Private Loader: Checking authentication status...");
    const { user } = await checkAuthStatus();
    
    if (!user) {
        console.log("Private Loader: User not authenticated, redirecting to /login");
        return redirect('/login');
    }

    console.log("Private Loader: User authenticated: ", user.email);
    return { user };
};


export const adminLoader = async (): Promise<AdminLoaderData | Response> => {
    console.log("Admin Loader: Checking authentication and role...");
    const { user } = await checkAuthStatus();

    if (!user) {
        console.log("Admin Loader: User not authenticated, redirecting to /login");
        return redirect('/login');
    }

    if (user.role !== 'admin') {
        console.log("Admin Loader: User is not an admin, redirecting to /");
        return redirect('/');
    }

    console.log("Admin Loader: User is an admin: ", user.email);
    return { user };
};
