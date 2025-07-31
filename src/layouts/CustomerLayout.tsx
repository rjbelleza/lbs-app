import React from "react";
import { useRouteLoaderData, Outlet } from "react-router-dom";
import type { CustomerLoaderData } from "../types";


const CustomerLayout: React.FC = () => {
    const { user } = useRouteLoaderData('customer') as CustomerLoaderData;

    return (
        <div>
            {user ? (
                <Outlet />
            ) : (
                <h5>Access Denied. User data not found</h5>
            )}
        </div>
    );
}

export default CustomerLayout;
