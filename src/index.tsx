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
            <Box margin={12} position="relative">
                <SvgIcon component={SvgDsLogo} color="text.primary" height={120} />
                <Typography variant="h1" sx={{ marginTop: 4 }}>Hello space</Typography>
                <Typography variant="h2">Headline 2</Typography>
                <Typography variant="h3">Headline 3</Typography>
                <Typography variant="h4">Headline 4</Typography>
                <Typography variant="body1">body 1</Typography>
                <Box position="absolute" top={0} right={0}>
                    <Box component="img" src="/assets/dish_vertical.jpg" alt="placeholder" width={250} />
                </Box>
            <Button>Button</Button>
            </Box>
        </ThemeProvider>
    </StrictMode>
);
