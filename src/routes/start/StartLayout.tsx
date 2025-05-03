import { ParallaxProvider } from "react-scroll-parallax";
import PageGridContainer from "./components/PageGridContainer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InlineIconLink from "components/InlineIconLink";
import X from "@mui/icons-material/X";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { Outlet } from "react-router-dom";

const StartLayout: React.FC = () => (
    <ParallaxProvider>
        <PageGridContainer>
            <Outlet />
        </PageGridContainer>
        <Box component="footer">
            <Container sx={{ paddingTop: 6, paddingBottom: 6 }}>
                <Typography variant="body1">
                    © 2025 DecenSpace
                </Typography>
                <Typography variant="body1">
                    Follow us
                    <Box component="span" marginTop={1} display="block">
                        <InlineIconLink
                            aria-label="X profile"
                            href="https://x.com/decenspace"
                            target="_blank"
                        >
                            <X />
                        </InlineIconLink>
                        <InlineIconLink
                            aria-label="LinkedIn profile"
                            href="https://www.linkedin.com/company/decen-space"
                            sx={{ transform: "scale(1.2)" }}
                            target="_blank"
                        >
                            <LinkedIn />
                        </InlineIconLink>
                    </Box>
                </Typography>
            </Container>
        </Box>
    </ParallaxProvider>
);

export default StartLayout;