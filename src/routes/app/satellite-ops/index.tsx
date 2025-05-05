import AppLayout from "../components/AppLayout";
import List from "@mui/material/List";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AppSidebarNavButton from "../components/AppSidebarNavButton";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { Outlet } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AppSidebarNavNested from "../components/AppSidebarNavNested";

const SatelliteOps: React.FC = () => (
    <AppLayout sidebar={(
        <List component="nav">
            <AppSidebarNavButton
                path="/app/satellite-ops"
                icon={<SpaceDashboardIcon />}
                text="Dashboard"
            />
            <AppSidebarNavButton
                path="/app/satellite-ops/satellites"
                icon={<SatelliteAltIcon />}
                text="Fleet"
            />
            <AppSidebarNavNested showOnRoute="/app/satellite-ops/satellites/*">
                <AppSidebarNavButton
                    path="/app/satellite-ops/satellites/register"
                    icon={<AddIcon />}
                    text="Register satellite"
                    sx={{ paddingLeft: 4 }}
                />
            </AppSidebarNavNested>
        </List>
    )}>
        <Outlet />
    </AppLayout>
);

export default SatelliteOps;