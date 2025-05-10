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
                variant="outlined"
                startIcon={<AccountBalanceIcon />}
                component={Link}
                to={`/${section}/stakers`}
                disabled
            >
                Stakers
            </Button>
            <Button
                variant="outlined"
                startIcon={<IconLanguage />}
                component={Link}
                to={profiles.groundStation[pathType]}
                color={groundStationOpsRoute ? "primary" : "secondary"}
            >
                Ground Stations
            </Button>
            <Button
                variant="outlined"
                startIcon={<IconSatelliteAlt />}
                component={Link}
                to={profiles.satelliteOperator[pathType]}
                color={satelliteOpsRoute ? "primary" : "secondary"}
            >
                Satellite Operators
            </Button>
            {wallet.publicKey &&
                wallet.publicKey.toString() === admin.toString() ? (
                <Button
                    variant="outlined"
                    component={Link}
                    to="/app/admin"
                    color="primary"
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
