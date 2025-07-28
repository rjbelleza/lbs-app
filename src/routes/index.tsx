import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const PageLoading = lazy(() => import('../components/loaders/PageLoading'));

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const MainLayout = lazy(() => import('../layouts/MainLayout'));


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;
