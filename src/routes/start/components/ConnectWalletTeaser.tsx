import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import WalletIcon from "@mui/icons-material/Wallet";

const downloadWalletLink = "https://solana.com/solana-wallets";
const securityArticleLink = "https://help.phantom.com/hc/en-us/articles/13515761228051-Security-Tips-for-Phantom-users";

const ConnectWalletTeaser: React.FC<BoxProps & { contactLink: string }> = ({ contactLink, ...props }) => (
    <Box {...props}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2} marginBottom={4}>
            <Button
                variant="outlined"
                size="large"
                color="primary"
                startIcon={<WalletIcon />}
            >
                Connect Wallet
            </Button>
            <Button
                variant="outlined"
                size="large"
                color="secondary"
                component={Link}
                href={downloadWalletLink}
                target="_blank"
            >
                Download a Wallet
            </Button>
            <Button
                variant="outlined"
                size="large"
                color="secondary"
                href={contactLink}
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

export default ConnectWalletTeaser