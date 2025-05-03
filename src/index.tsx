import { createRoot } from "react-dom/client";
import { lazy, StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import {
    createHashRouter,
    Navigate,
    RouterProvider,
} from "react-router";
import StartLayout from "routes/start/StartLayout";
import Start from "routes/start";

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
                element: <Start />
            },
            {
                path: "/start/ground-station-ops",
                Component: lazy(() => import("routes/start/ground-station-ops"))
            },
            {
                path: "/start/satellite-ops",
                Component: lazy(() => import("routes/start/satellite-ops"))
            }
        ]
    },
    {
        path: "/app",
        Component: lazy(() => import("routes/app"))
    },
    {
        path: "/theme-test",
        Component: lazy(() => import("routes/theme-test"))
    }
]);

createRoot(document.body).render(
    <StrictMode>
        <ThemeProvider theme={createTheme(theme)}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
