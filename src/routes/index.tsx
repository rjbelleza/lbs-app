import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { adminLoader, privatePagesLoader } from "../utils/helpers";
import AdminLayout from "../layouts/AdminLayout";

const PageLoading = lazy(() => import('../components/loaders/PageLoading'));

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const PrivateLayout = lazy(() => import('../layouts/PrivateLayout'));


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
        element: <LoginPage />,
        errorElement: <Suspense fallback={<PageLoading />}><NotFoundPage /></Suspense>
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
            }
        ]
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;
