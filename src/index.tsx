import { createRoot } from "react-dom/client";
import { lazy, StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import Home from "routes/home";
import { createHashRouter, Outlet, RouterProvider } from "react-router";

// can't have real SPA routing on GH pages.
// Will use createBrowserRouter if we have an Nginx server
const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/theme-test",
        Component: lazy(() => import("routes/theme-test")),
      },
      {
        path: "/newsletter-signup-form",
        Component: lazy(() => import("routes/newsletter-signup-form")),
      },
    ],
  },
]);

createRoot(document.body).render(
  <StrictMode>
    <ThemeProvider theme={createTheme(theme)}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
