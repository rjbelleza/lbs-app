import type { PrivatePagesLoaderData, AdminLoaderData, CustomerLoaderData } from "../types";
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


export const customerLoader = async (): Promise<CustomerLoaderData | Response> => {
    console.log("Customer Loader: Checking authentication and role...");
    const { user } = await checkAuthStatus();

    if (!user) {
        console.log("Admin Loader: User not authenticated, redirecting to /login");
        return redirect('/login');
    }

    if (user.role !== 'customer') {
        console.log("Admin Loader: User is not an admin, redirecting to /");
        return redirect('/');
    }

    console.log("Admin Loader: User is a customer: ", user.email);
    return { user };
};


export const userDispatcherLoader = async () => {
    console.log("User Dispatcher Loader: Determining role-based redirection...");
    const { user } = await checkAuthStatus();

    if (!user) {
        console.log("User Dispatcher Loader: User not found (fallback), redirecting to /login.");
        return redirect('/login');
    }

    if (user.role === 'admin') {
        console.log("User Dispatcher Loader: User is admin, redirecting to /user/admin.");
        return redirect('/user/admin');
    }

    if (user.role === 'customer') {
        console.log("User Dispatcher Loader: User is admin, redirecting to /user/customer.");
        return redirect('/user/customer');
    }

    console.log("User Dashboard Dispatcher Loader: Unexpected role or no specific dashboard, redirecting to /access-denied.");
    return redirect('/access-denied');
};
