import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Box, Container, createTheme, ThemeProvider } from "@mui/system";
import theme from "theme";
import Typography from "components/Typography";
import Button from "components/Button";
import SvgDsLogo from "icons/DsLogo";
import SvgIcon from "components/SvgIcon";
import PageGridContainer, { GridArea } from "components/PageGridContainer";
import TextSection from "components/TextSection";
import { ParallaxProvider } from "react-scroll-parallax";
import MobileParallaxDishImage from "components/MobileParallaxDishImage";
import AudienceButtons from "components/AudienceButtons";
import InlineIconLink from "components/InlineIconLink";
import X from "@mui/icons-material/X";
import LinkedIn from "@mui/icons-material/LinkedIn";

createRoot(document.body).render(
    <StrictMode>
        <ThemeProvider theme={createTheme(theme)}>
            <ParallaxProvider>
                <PageGridContainer>
                    <Box gridArea={GridArea.above} justifySelf="end" marginBottom={10} marginTop={{ xs: 6, sm: 0 }}>
                        <Button component="a" href="mailto:info@decenspace.com" sx={{ textDecoration: "none" }}>Contact us</Button>
                    </Box>
                    <Box component="header" gridArea={GridArea.head}>
                        <SvgIcon component={SvgDsLogo} color="text.primary" height={128} marginBottom={5} />
                        <Typography variant="h2">
                            Democratizing space communications
                        </Typography>
                        <Box>
                            <Typography variant="h4">
                                Bringing satellite companies and ground station operators together using DePIN technology.
                                Our vision is to provide a protocol for a sustainable and accelerating marketplace for the space industry, where all parties benefit from commitment, long term participation and growth.
                            </Typography>
                            <MobileParallaxDishImage marginTop={4} marginBottom={8} />
                        </Box>
                    </Box>
                    <Box gridArea={GridArea.main} paddingTop={{ xs: 8, sm: 16 }}>
                        <TextSection heading="Why we built it" first>
                            <Typography variant="body1">
                                The space industry faces a critical infrastructure challenge: ground station access is expensive, centralized, and inefficient. Satellite operators struggle with limited coverage while existing ground stations sit underutilized. We built DecentSpace to create a marketplace that transforms how the space industry communicates with satellites, democratizing access while rewarding participation.
                            </Typography>
                            <Typography variant="h3" sx={{ marginTop: 3, marginBottom: 3 }}>
                                28,000 satellites
                            </Typography>
                            <Typography variant="body1">
                                By 2030, over 28,000 satellites will be in orbit, creating unprecedented demand for ground station capacity. Traditional solutions can't scale efficiently to meet this need. Our decentralized network approach turns this challenge into an opportunity by enabling anyone with suitable hardware to join the network and provide essential communications infrastructure.
                            </Typography>
                        </TextSection>
                        <TextSection heading="How DePIN can help">
                            <Typography variant="body1">
                                Decentralized Physical Infrastructure Networks enable secure, transparent, and trustless coordination between satellite operators and ground station owners. Smart contracts automate scheduling, payment, and quality verification without middlemen. This creates a self-sustaining network where participants are fairly rewarded for their contributions, while cryptographic verification ensures reliable service quality.
                            </Typography>
                            <Typography variant="h3" sx={{ marginTop: 3 }}>
                                Lower costs by higher efficiency
                            </Typography>
                        </TextSection>
                        <TextSection heading="The network incentives">
                            <Typography variant="body1">
                                Our economic model creates fair incentives for all participants, rewarding ground station operators based on contribution quality and strategic location. Satellite operators gain cost-effective access to a global communications network, with transparent pricing and performance metrics. This value-sharing approach ensures sustainable growth and aligns the interests of all participants for long-term success.
                            </Typography>
                            <Typography variant="h3" sx={{ marginTop: 3 }}>
                                Join a growing network
                            </Typography>
                        </TextSection>
                    </Box>
                    <Box gridArea={GridArea.aside}>
                        <Box
                            component="img"
                            display={{ xs: "none", sm: "block" }}
                            src="/assets/dish_vertical.jpg"
                            alt="placeholder"
                            width="100%"
                            sx={{ objectFit: "cover" }}
                        />
                        <AudienceButtons />
                    </Box>
                    <Box gridArea={GridArea.below}>
                        <Button onClick={() => window.alert("We are working on that. Please contact us for any questions.")}>
                            Read the whitepaper
                        </Button>
                    </Box>
                </PageGridContainer>
                <Box component="footer" bgcolor="background.default" height={240} marginTop={{ xs: 0, sm: 8 }}>
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
        </ThemeProvider>
    </StrictMode>
);
