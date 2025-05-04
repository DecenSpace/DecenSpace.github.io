import Box, { BoxProps } from "@mui/material/Box";
import { GridArea } from "../routes/start/components/PageGridContainer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import IconSatelliteAlt from "@mui/icons-material/SatelliteAlt";
import IconLanguage from "@mui/icons-material/Language";
import { Link, useMatch } from "react-router-dom";
import Button from "@mui/material/Button";
import WalletControl from "./WalletControl";

// TODO: render in top right menu on XS
const ProfileSelectMenu: React.FC<BoxProps & { onDisconnect?: () => void }> = ({ onDisconnect, ...props }) => {

    const satelliteOpsRoute = useMatch("/start/satellite-ops");
    const groundStationOpsRoute = useMatch("/start/ground-station-ops");

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
                to="/start/stakers"
                disabled
            >
                Stakers
            </Button>
            <Button
                variant="outlined"
                startIcon={<IconLanguage />}
                component={Link}
                to="/start/ground-station-ops"
                color={groundStationOpsRoute ? "primary" : "secondary"}
            >
                Ground Stations
            </Button>
            <Button
                variant="outlined"
                startIcon={<IconSatelliteAlt />}
                component={Link}
                to="/start/satellite-ops"
                color={satelliteOpsRoute ? "primary" : "secondary"}
            >
                Satellite Operators
            </Button>
            <WalletControl sx={{ order: { xs: 0, sm: -1, lg: 1 } }} onDisconnect={onDisconnect} />
        </Box>
    );
};

export default ProfileSelectMenu;