import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { 
    adminLoader, 
    customerLoader, 
    privatePagesLoader, 
    userDispatcherLoader 
} from "../utils/loaders";
import { loginAction } from "../utils/actions";

const PageLoading = lazy(() => import('../components/loaders/PageLoading'));

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const CustomerDashboard = lazy(() => import('../pages/customer/CustomerDashboard'));
const UserDispatcherPage = lazy(() => import('../pages/UserDispatcherPage'));
const AccessDeniedPage = lazy(() => import('../pages/AccessDeniedPage'));

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const PrivateLayout = lazy(() => import('../layouts/PrivateLayout'));
const AdminLayout = lazy(() => import('../layouts/AdminLayout'));
const CustomerLayout = lazy(() => import('../layouts/CustomerLayout'));


const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <Suspense fallback={<PageLoading />}><NotFoundPage /></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense fallback={<PageLoading />}><HomePage /></Suspense>
            }
        ]
    },
    {
        path: '/login',
        Component: LoginPage,
        action: loginAction,
    },
    {
        path: '/user',
        Component: PrivateLayout,
        loader: privatePagesLoader,
        id: 'private',
        children: [
            {
                index: true,
                Component: UserDispatcherPage,
                loader: userDispatcherLoader,
                id: 'dispatcher'
            },
            {
                path: 'admin',
                Component: AdminLayout,
                loader: adminLoader,
                id: 'admin',
                children: [
                    {
                        index: true,
                        Component: AdminDashboard
                    }
                ]
            },
            {
                path: 'customer',
                Component: CustomerLayout,
                loader: customerLoader,
                id: 'customer',
                children: [
                    {
                        index: true,
                        Component: () => <Suspense fallback={<PageLoading />}><CustomerDashboard /></Suspense>
                    }
                ]
            }
        ]
    },
    {
        path: '/access-denied',
        element: <Suspense fallback={<PageLoading />}><AccessDeniedPage /></Suspense>
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;
