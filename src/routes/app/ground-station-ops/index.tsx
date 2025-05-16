import AppLayout from "../components/AppLayout";
import List from "@mui/material/List";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AppSidebarNavButton from "../components/AppSidebarNavButton";
import IconLanguage from "@mui/icons-material/Language";
import { Outlet } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AppSidebarNavNested from "../components/AppSidebarNavNested";

const GroundStationOps: React.FC = () => (
    <AppLayout sidebar={(
        <List component="nav">
            <AppSidebarNavButton
                path="/app/ground-station-ops"
                icon={<SpaceDashboardIcon />}
                text="Dashboard"
            />
            <AppSidebarNavButton
                path="/app/ground-station-ops/stations"
                icon={<IconLanguage />}
                text="Stations"
            />
            <AppSidebarNavNested showOnRoute="/app/ground-station-ops/stations/*">
                <AppSidebarNavButton
                    path="/app/ground-station-ops/stations/register"
                    icon={<AddIcon />}
                    text="Register station"
                    sx={{ paddingLeft: 4 }}
                />
            </AppSidebarNavNested>
        </List>
    )}>
        <Outlet />
    </AppLayout>
);

export default GroundStationOps;