import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import WalletIcon from "@mui/icons-material/Wallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { useNavigate } from "react-router";
import { profiles, ProfileType } from "utils/profiles";

const downloadWalletLink = "https://solana.com/solana-wallets";
const securityArticleLink = "https://help.phantom.com/hc/en-us/articles/13515761228051-Security-Tips-for-Phantom-users";

const ConnectWalletTeaser: React.FC<BoxProps & { profile: ProfileType }> = ({ profile, ...props }) => {
    
    const { buttonText, appPath, contactEmailLink } = profiles[profile];

    const { setVisible: setModalVisible } = useWalletModal();
    const { wallet, publicKey } = useWallet();
    
    const navigate = useNavigate();

    const onFirstButtonClick = () => {
        if (publicKey) {
            navigate(appPath);
        } else {
            setModalVisible(true);
        }
    };

    return (
        <Box {...props}>
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2} marginBottom={4}>
                <Button
                    size="large"
                    color="primary"
                    startIcon={publicKey ? <SpaceDashboardIcon /> : <WalletIcon />}
                    onClick={onFirstButtonClick}
                >
                    {publicKey ? buttonText : "Connect Wallet"}
                </Button>
                {!wallet && (
                    <Button
                        size="large"
                        color="secondary"
                        component={Link}
                        href={downloadWalletLink}
                        target="_blank"
                    >
                        Download a Wallet
                    </Button>
                )}
                <Button
                    size="large"
                    color="secondary"
                    href={contactEmailLink}
                >
                    Contact us
                </Button>
            </Box>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                flexDirection="row"
                gap={3}
                marginTop={4}
            >
                <Box
                    display="block"
                    component="img"
                    src="/assets/solanaLogoMark.svg"
                    alt="Solana Logo"
                    width={24}
                    height={24}
                />
                <Typography variant="body2">
                    You need to download a <strong>Solana</strong> blockchain <Link href={downloadWalletLink} target="_blank">wallet software</Link> to interact with DecenSpace.
                    No registration is required. Tokens are only required for adding data.
                    Learn about <Link href={securityArticleLink} target="_blank">basic security advise</Link> before interacting with the blockchain. We will never ask for your private key or seed phrase.
                </Typography>
            </Box>
        </Box>
    );
};

export default ConnectWalletTeaser