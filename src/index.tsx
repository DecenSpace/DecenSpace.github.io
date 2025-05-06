import { createRoot } from "react-dom/client";
import { StrictMode, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import { RouterProvider } from "react-router";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import WalletAutoConnect from "components/WalletAutoConnect";
import router from "router";
import { ReactQueryProvider } from "providers/ReactQueryProvider";

const App: React.FC = () => {
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  return (
    <ReactQueryProvider>
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
    </ReactQueryProvider>
  );
};

createRoot(document.body).render(<App />);
