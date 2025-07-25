import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


const HomePage = lazy(() => import('../pages/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const MainLayout = lazy(() => import('../layouts/MainLayout'));


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Suspense fallback={<div>Loading...</div>}><NotFoundPage /></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>
            }
        ]
    }
]);

export default router;
