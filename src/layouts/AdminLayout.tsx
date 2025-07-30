import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import type { AdminLoaderData } from "../types";


const AdminLayout: React.FC = () => {
    const { user } = useRouteLoaderData('admin') as AdminLoaderData;

    return (
        <div>
            {user ? (
                <h5>Hello! You have access to the admin functionality.</h5>
            ) : (
                <h5>Access Denied. User data not found</h5>
            )}
        </div>
    );
}

export default AdminLayout;
