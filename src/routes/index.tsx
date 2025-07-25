import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const PageLoading = lazy(() => import('../components/loaders/PageLoading'));

const HomePage = lazy(() => import('../pages/HomePage'));
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
    }
]);

export default router;
