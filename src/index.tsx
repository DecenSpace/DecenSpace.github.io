import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/system";
import theme from "theme";
import Typography from "components/Typography";
import Button from "components/Button";
import SvgDsLogo from "icons/DsLogo";
import SvgIcon from "components/SvgIcon";

createRoot(document.body).render(
    <StrictMode>
        <ThemeProvider theme={createTheme(theme)}>
            <Box margin={12} position="relative" paddingRight="280px">
                <SvgIcon component={SvgDsLogo} color="text.primary" height={120} />
                <Typography variant="h1" sx={{ marginTop: 4 }}>Hello space</Typography>
                <Typography variant="h2">
                    Decentralized space communication
                    </Typography>
                <Typography variant="h3">
                    Headline 3
                </Typography>
                <Typography variant="h4">
                    Bringing satellite companies and ground station operators together using blockchain technology.
                    Our vision is to provide a protocol for a sustainable and accelerating marketplace for the space industry, where all parties benefit from commitment and long term participation and growth.</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </Typography>
                <Button marginTop={4}>Button</Button>
                <Box position="absolute" top={0} right={0}>
                    <Box component="img" src="/assets/dish_vertical.jpg" alt="placeholder" width={250} />
                </Box>
            </Box>
        </ThemeProvider>
    </StrictMode>
);
