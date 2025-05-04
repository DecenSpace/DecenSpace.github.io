import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

const WalletAutoConnect: React.FC = () => {

    const { wallet, publicKey, connect } = useWallet();

    // automatically connect to wallet
    useEffect(() => {
        if (wallet && !publicKey) {
            connect().then(() => {
                // TODO: show snackbar
            });
        }
    }, [wallet, publicKey, connect]);

    return null;
};

export default WalletAutoConnect;