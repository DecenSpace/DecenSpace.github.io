import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProfileSelectMenu from "components/ProfileSelectMenu";
import SvgDsLogoLong from "icons/DsLogoLong";
import { Link, useNavigate } from "react-router-dom";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const navigate = useNavigate();

    return (
        <Container>
            <ProfileSelectMenu marginTop={6} onDisconnect={() => navigate("/start")} />
            <Link to="/start">
                <Box component={SvgDsLogoLong} color="text.primary" height={24} />
            </Link>
            <Box marginTop={6}>
                {children}
            </Box>
        </Container>
    );
};

export default AppLayout;