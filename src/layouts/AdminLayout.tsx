import React from "react";
import { useRouteLoaderData, Outlet } from "react-router-dom";
import type { AdminLoaderData } from "../types";


const AdminLayout: React.FC = () => {
    const { user } = useRouteLoaderData('admin') as AdminLoaderData;

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

export default AdminLayout;
