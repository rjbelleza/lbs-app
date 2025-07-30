import type { PrivatePagesLoaderData, AdminLoaderData } from "../types";
import { checkAuthStatus } from "./helpers";
import { redirect } from "react-router-dom";


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
