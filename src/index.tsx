import { createRoot } from "react-dom/client";
import { lazy, StrictMode, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import {
    createHashRouter,
    Navigate,
    RouterProvider,
} from "react-router";
import StartLayout from "routes/start/StartLayout";
import Start from "routes/start";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import WalletAutoConnect from "components/WalletAutoConnect";

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
        path: "/app/ground-station-ops",
        Component: lazy(() => import("routes/app/ground-station-ops"))
    },
    {
        path: "/app/satellite-ops",
        Component: lazy(() => import("routes/app/satellite-ops"))
    },
    {
        path: "/theme-test",
        Component: lazy(() => import("routes/theme-test"))
    }
]);

const App: React.FC = () => {

    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [
        new PhantomWalletAdapter()
    ], [network]);

    return (
        <StrictMode>
            <ThemeProvider theme={createTheme(theme)}>
                <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets}>
                        <WalletModalProvider>
                            <RouterProvider router={router} />
                        </WalletModalProvider>
                        <WalletAutoConnect />
                    </WalletProvider>
                </ConnectionProvider>
            </ThemeProvider>
        </StrictMode>
    );
};

createRoot(document.body).render(<App />);
