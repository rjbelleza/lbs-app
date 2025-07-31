import React, { Suspense } from "react";
import { useRouteLoaderData, Outlet } from "react-router-dom";
import type { AdminLoaderData } from "../types";
import PageLoading from "../components/loaders/PageLoading";


const AdminLayout: React.FC = () => {
    const { user } = useRouteLoaderData('admin') as AdminLoaderData;

    return (
        <div>
            {user ? (
                <Suspense fallback={<PageLoading />}>
                    <Outlet />
                </Suspense>
            ) : (
                <h5>Access Denied. User data not found</h5>
            )}
        </div>
    );
}

export default AdminLayout;
