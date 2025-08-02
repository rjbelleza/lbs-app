import React from "react";
import { useRouteLoaderData, Outlet, Form } from "react-router-dom";
import type { CustomerLoaderData } from "../types";
import LogoutButton from "../components/buttons/LogoutButton";


const CustomerLayout: React.FC = () => {
    const { user } = useRouteLoaderData('customer') as CustomerLoaderData;

    return (
        <div>
            <Form action="/logout" method="post">
                <LogoutButton />
            </Form>
            {user ? (
                <Outlet />
            ) : (
                <h5>Access Denied. User data not found</h5>
            )}
        </div>
    );
}

export default CustomerLayout;
