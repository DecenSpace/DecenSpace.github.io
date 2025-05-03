import Box, { BoxProps } from "@mui/material/Box";
import { GridArea } from "./PageGridContainer";
import StartPageButton from "./StartPageButton";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import IconWallet from "@mui/icons-material/Wallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import IconSatelliteAlt from "@mui/icons-material/SatelliteAlt";
import IconLanguage from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

// TODO: render in top right menu on XS
const RolesSelectMenu: React.FC<BoxProps> = props => (
    <Box
        gridArea={GridArea.above}
        justifySelf="end"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent={{ xs: "flex-start", lg: "flex-end" }}
        alignItems={{ xs: "stretch", sm: "flex-end", lg: "stretch" }}
        gap={{ xs: 4, sm: 2 }}
        width="100%"
        {...props}
    >
        <StartPageButton
            size="large"
            startIcon={<AccountBalanceIcon />}
            component={Link}
            to="/start/stakers"
            disabled
        >
            Stakers
        </StartPageButton>
        <StartPageButton
            size="large"
            startIcon={<IconLanguage />}
            component={Link}
            to="/start/ground-station-ops"
        >
            Ground Station Operators
        </StartPageButton>
        <StartPageButton
            size="large"
            startIcon={<IconSatelliteAlt />}
            component={Link}
            to="/start/satellite-ops"
        >
            Satellite Operators
        </StartPageButton>
        <Box order={{ xs: 0, sm: -1, lg: 1 }} display="flex" alignItems="center" gap={1} flexDirection="row">
            <Tooltip title="Wallet not connected" placement="bottom" arrow>
                <IconButton size="large">
                    <Badge color="warning" variant="dot">
                        <IconWallet />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Typography variant="body1" display={{ xs: "block", lg: "none" }}>Connect Wallet</Typography>
        </Box>
    </Box>
);

export default RolesSelectMenu;