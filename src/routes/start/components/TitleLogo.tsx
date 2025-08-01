import Box from "@mui/material/Box";
import DecenSpaceMainPageLogo from "icons/DecenSpaceMainPageLogo";
import { Link } from "react-router-dom";

const TitleLogo: React.FC<{ size: number }> = ({ size }) => (
    <Box
        marginBottom={5}
        position="relative"
        component={Link}
        to="/start"
        display="block"
    >
        <Box
            component={DecenSpaceMainPageLogo}
            color="text.primary"
            height={size}
            sx={{
                filter: "blur(6px)",
                opacity: 0.6,
                position: "absolute",
                left: 0,
                top: 0,
            }}
        />
    </Box>
);

export default TitleLogo;
