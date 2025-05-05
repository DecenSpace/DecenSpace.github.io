import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProfileSelectMenu from "components/ProfileSelectMenu";
import SvgDsLogoLong from "icons/DsLogoLong";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

const AppLayout: React.FC<{ sidebar: React.ReactNode, children: React.ReactNode }> = ({ sidebar, children }) => {

    const navigate = useNavigate();

    return (
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={6}>
                <Link to="/start">
                    <Box component={SvgDsLogoLong} color="text.primary" height={24} />
                </Link>
                <ProfileSelectMenu section="app" onDisconnect={() => navigate("/start")} />
            </Box>
            <Box
                flexGrow={1}
                marginTop={3}
                bgcolor="background.default"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="stretch"
                minHeight="70vh"
            >
                <Paper sx={{ width: 240, display: "flex", flexDirection: "column", flexShrink: 0 }} elevation={1}>
                    {sidebar}
                </Paper>
                <Box flexGrow={1} padding={3}>
                    {children}
                </Box>
            </Box>
        </Container>
    );
};

export default AppLayout;