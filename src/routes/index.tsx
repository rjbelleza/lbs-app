import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { adminLoader, privatePagesLoader } from "../utils/loaders";
import { loginAction } from "../utils/actions";

const PageLoading = lazy(() => import('../components/loaders/PageLoading'));

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const PrivateLayout = lazy(() => import('../layouts/PrivateLayout'));
const AdminLayout = lazy(() => import('../layouts/AdminLayout'));


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
        element: <PrivateLayout />,
        loader: privatePagesLoader,
        id: 'private',
        children: [
            {
                path: 'admin',
                Component: AdminLayout,
                loader: adminLoader,
                id: 'admin',
                children: [
                    {
                        index: true,
                        Component: () => <Suspense fallback={<PageLoading />}><AdminDashboard /></Suspense>
                    }
                ]
            }
        ]
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;
