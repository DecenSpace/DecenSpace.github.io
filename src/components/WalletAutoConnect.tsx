import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useShowSnackbar } from "./SnackbarProvider";

const WalletAutoConnect: React.FC = () => {

    const { wallet, publicKey, connect, select: selectWallet } = useWallet();

    const showSnackbar = useShowSnackbar();

    // automatically connect to wallet
    useEffect(() => {
        if (wallet && !publicKey) {
            connect().catch(() => {
                showSnackbar("Wallet could not be connected", "error", 2000);
                selectWallet(null);
            });
        }
    }, [wallet, publicKey, connect]);

    return null;
};

export default WalletAutoConnect;