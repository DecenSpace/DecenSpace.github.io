import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useState } from "react";
import IconWallet from "@mui/icons-material/Wallet";
import Box, { BoxProps } from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { profiles } from "utils/profiles";
import { useNavigate } from "react-router";

const WalletControl: React.FC<BoxProps & { onDisconnect?: () => void }> = ({ onDisconnect, ...props }) => {

    const { setVisible: setModalVisible } = useWalletModal();
    const { publicKey, disconnect } = useWallet();

    const [menuAnchorElement, setMenuAnchorElement] = useState<HTMLElement | null>(null);

    const navigate = useNavigate();

    const onButtonClick = (e: React.MouseEvent) => {

        if (!publicKey) {
            setModalVisible(true);

        } else if (e.currentTarget instanceof HTMLElement) {
            setMenuAnchorElement(e.currentTarget);
        }
    };

    const onDisconnectClick = () => {

        if (publicKey) {
            disconnect().then(() => {
                // TODO: show snackbar

                onDisconnect?.();
            });
        }

        setMenuAnchorElement(null);
    };

    const keyAsString = publicKey?.toString() || "";
    const shortKey = keyAsString.substring(0, 4) + "..." + keyAsString.substring(keyAsString.length - 4);

    return (
        <Box {...props}>
            <Badge color={publicKey ? "success" : "warning"} variant="dot">
                <Button
                    variant={publicKey ? "contained" : "text"}
                    startIcon={<IconWallet />}
                    endIcon={publicKey && <MenuIcon />}
                    onClick={onButtonClick}
                >
                    {publicKey ? shortKey : "Connect Wallet"}
                </Button>
            </Badge>
            <Menu
                anchorEl={menuAnchorElement}
                open={!!menuAnchorElement}
                onClose={() => setMenuAnchorElement(null)}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                slotProps={{
                    paper: {
                        sx: { minWidth: 170, marginTop: 1 }
                    }
                }}
                
            >
                <MenuItem disabled>Balance</MenuItem>
                <MenuItem onClick={() => navigate(profiles.groundStation.appPath)}>
                    {profiles.groundStation.buttonText}
                </MenuItem>
                <MenuItem onClick={() => navigate(profiles.satelliteOperator.appPath)}>
                    {profiles.satelliteOperator.buttonText}
                </MenuItem>
                <MenuItem disabled>Settings</MenuItem>
                <MenuItem onClick={onDisconnectClick}>Disconnect</MenuItem>
            </Menu>
        </Box>
    );
};

export default WalletControl;