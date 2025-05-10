import { lazy } from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import Start from "routes/start";
import StartLayout from "routes/start/StartLayout";

// can't have real SPA routing on GH pages.
// Will use createBrowserRouter if we have an Nginx server
const router = createHashRouter([
    {
        path: "/",
        // In this place could later be a smart redirect, that checks if a wallet is connected.
        // If so, redirect to /app route
        element: <Navigate to="/start" replace />,
    },
    {
        path: "/start",
        element: <StartLayout />,
        children: [
            {
                index: true,
                element: <Start />,
            },
            {
                path: "/start/ground-station-ops",
                Component: lazy(() => import("routes/start/ground-station-ops")),
            },
            {
                path: "/start/satellite-ops",
                Component: lazy(() => import("routes/start/satellite-ops")),
            },
        ],
    },
    {
        path: "/app/ground-station-ops",
        Component: lazy(() => import("routes/app/ground-station-ops")),
    },
    {
        path: "/app/satellite-ops",
        Component: lazy(() => import("routes/app/satellite-ops")),
        children: [
            {
                index: true,
                Component: lazy(() => import("routes/app/satellite-ops/home")),
            },
            {
                path: "/app/satellite-ops/satellites",
                Component: lazy(() => import("routes/app/satellite-ops/satellites")),
            },
            {
                // Only semantically a nested route
                path: "/app/satellite-ops/satellites/register",
                Component: lazy(
                    () => import("routes/app/satellite-ops/satellites/register")
                ),
            },
        ],
    },
    {
        path: "/app/admin",
        Component: lazy(() => import("routes/app/admin")),
    },
    {
        path: "/theme-test",
        Component: lazy(() => import("routes/theme-test")),
    },
]);

export default router;
