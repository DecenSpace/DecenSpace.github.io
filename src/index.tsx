import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Box, Container, createTheme, styled, ThemeProvider } from "@mui/system";
import theme from "theme";
import Typography from "components/Typography";
import Button from "components/Button";
import SvgDsLogo from "icons/DsLogo";
import SvgIcon from "components/SvgIcon";

enum GridArea {
    above = "above",
    head = "head",
    main = "main",
    aside = "aside",
    below = "below"
}

const PageGridContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto auto auto auto",
    gap: theme.spacing(3),
    gridTemplateAreas: `
        "${GridArea.head}"
        "${GridArea.main}"
        "${GridArea.below}"
        "${GridArea.aside}"
        "${GridArea.above}"
    `,
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(6,  minmax(0, 1fr))",
        gridTemplateAreas: `
            "${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.above} ${GridArea.above}"
            "${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.main} ${GridArea.main} ${GridArea.main} . ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.below} ${GridArea.below} ${GridArea.below} . ${GridArea.aside} ${GridArea.aside}"
        `
    }
}));

createRoot(document.body).render(
    <StrictMode>
        <ThemeProvider theme={createTheme(theme)}>
            <PageGridContainer>
                <Box bgcolor="teal" color="white" gridArea="above">
                    <div>contact us</div>
                </Box>
                <Box bgcolor="red" color="white" gridArea="head">
                    <div>Logo</div>
                    <div>Claim</div>
                    <Box display="flex" flexDirection="row" gap={3}>
                        <div>sub-headline</div>
                        <Box display={{ sm: "none" }}>
                            Dish Image - mobile
                        </Box>
                    </Box>
                </Box>
                <Box bgcolor="blue" color="white" gridArea="main">
                    <div>paragraph</div>
                    <div>paragraph</div>
                    <div>paragraph</div>
                </Box>
                <Box bgcolor="green" color="white" gridArea="aside">
                    <Box display={{ xs: "none", sm: "block" }}>
                        Dish Image - desktop
                    </Box>
                    <div>01</div>
                    <div>02</div>
                </Box>
                <Box bgcolor="purple" color="white" gridArea="below">
                    <div>read the whitepaper</div>
                </Box>
            </PageGridContainer>
        </ThemeProvider>
    </StrictMode>
);
