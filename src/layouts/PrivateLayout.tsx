import React from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import type { PrivatePagesLoaderData } from "../types";
import PageLoading from "../components/loaders/PageLoading";


const PrivateLayout: React.FC = () => {
    const { user } = useLoaderData() as PrivatePagesLoaderData;
    const navigation = useNavigation();

    return (
        <div>
            <h1>Welcome user!</h1>
            <h2>{user?.email}</h2>
            {navigation.state === "loading" ? (
                <PageLoading />
            ) : (
                <Outlet />
            )}
        </div>
    );
}

export default PrivateLayout;
