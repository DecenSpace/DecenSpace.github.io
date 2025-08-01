import Box, { BoxProps } from "@mui/material/Box";
import { GridArea } from "../routes/start/components/PageGridContainer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import IconSatelliteAlt from "@mui/icons-material/SatelliteAlt";
import IconLanguage from "@mui/icons-material/Language";
import { Link, useMatch } from "react-router-dom";
import Button from "@mui/material/Button";
import WalletControl from "./WalletControl";
import { profiles } from "utils/profiles";
import { useWallet } from "@solana/wallet-adapter-react";
import adminPubkey from "routes/app/admin/utils/adminPubkey";

const admin = adminPubkey;

interface IProfileSelectMenuProps extends BoxProps {
    section: "start" | "app";
    onDisconnect?: () => void;
}

// TODO: render in top right menu on XS
const ProfileSelectMenu: React.FC<IProfileSelectMenuProps> = ({
    section,
    onDisconnect,
    ...props
}) => {
    const wallet = useWallet();
    const pathType = section === "app" ? "appPath" : "startPath";

    const satelliteOpsRoute = useMatch(profiles.satelliteOperator[pathType]);
    const groundStationOpsRoute = useMatch(profiles.groundStation[pathType]);

    return (
        <Box
            gridArea={GridArea.above}
            justifySelf="end"
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent={{ xs: "flex-start", lg: "flex-end" }}
            alignItems={{ xs: "stretch", sm: "flex-end", lg: "flex-start" }}
            gap={{ xs: 4, sm: 2 }}
            width="100%"
            {...props}
        >
            <Button
                variant="text"
                startIcon={<AccountBalanceIcon />}
                component={Link}
                to={`/${section}/stakers`}
                sx={{ fontFamily: "Satoshi", fontWeight: 700 }}
                disabled
            >
                Stakers
            </Button>
            <Button
                variant="text"
                startIcon={<IconLanguage />}
                component={Link}
                to={profiles.groundStation[pathType]}
                sx={{
                    fontFamily: "Satoshi",
                    fontWeight: 700,
                    color: `${groundStationOpsRoute ? "#4C3B93" : "#010532"}`,
                }}
            >
                Ground Stations
            </Button>
            <Button
                variant="text"
                startIcon={<IconSatelliteAlt />}
                component={Link}
                to={profiles.satelliteOperator[pathType]}
                sx={{
                    fontFamily: "Satoshi",
                    fontWeight: 700,
                    color: `${satelliteOpsRoute ? "#4C3B93" : "#010532"}`,
                }}
            >
                Satellite Operators
            </Button>
            {wallet.publicKey &&
            wallet.publicKey.toString() === admin.toString() ? (
                <Button
                    variant="text"
                    component={Link}
                    to="/app/admin"
                    color="primary"
                    sx={{
                        fontFamily: "Satoshi",
                        fontWeight: 700,
                        color: `${
                            groundStationOpsRoute ? "#4C3B93" : "#010532"
                        }`,
                    }}
                >
                    ADMIN
                </Button>
            ) : null}
            <WalletControl
                sx={{ order: { xs: 0, sm: -1, lg: 1 } }}
                onDisconnect={onDisconnect}
            />
        </Box>
    );
};

export default ProfileSelectMenu;
