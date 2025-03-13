import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/system";
import theme from "theme";
import Typography from "components/Typography";
import Button from "components/Button";
import SvgDsLogo from "icons/DsLogo";
import SvgIcon from "components/SvgIcon";
import PageGridContainer, { GridArea } from "components/PageGridContainer";
import TextSection from "components/TextSection";
import EnumerationItem from "components/EnumerationItem";

createRoot(document.body).render(
    <StrictMode>
        <ThemeProvider theme={createTheme(theme)}>
            <PageGridContainer>
                <Box gridArea={GridArea.above} justifySelf="end" marginBottom={10}>
                    <Button href="mailto:info@decenspace.com">contact us</Button>
                </Box>
                <Box component="header" gridArea={GridArea.head}>
                    <SvgIcon component={SvgDsLogo} color="text.primary" height={128} marginBottom={5} />
                    <Typography variant="h2">
                        Decentralized space communication
                    </Typography>
                    <Box display="flex" flexDirection="row" gap={3}>
                        <Typography variant="h4">
                            Bringing satellite companies and ground station operators together using DePIN technology.
                            Our vision is to provide a protocol for a sustainable and accelerating marketplace for the space industry, where all parties benefit from commitment and long term participation and growth.
                        </Typography>
                        <Box
                            component="img"
                            src="/assets/dish_vertical.jpg"
                            alt="placeholder"
                            width={250}
                            display={{ sm: "none" }}
                            sx={{ objectFit: "cover" }}
                        />
                    </Box>
                </Box>
                <Box gridArea={GridArea.main}>
                    <TextSection heading="Why we built it">
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
                    <Stack marginTop={{ xs: 6, sm: 10 }} marginBottom={6} gap={8}>
                        <EnumerationItem
                            num={1}
                            label="Satellite operators"
                            linkLabel="get in touch with us"
                            linkHref="mailto:satellites@decenspace.com"
                            zIndex={1}
                        />
                        <EnumerationItem
                            num={2}
                            label="Ground station operators"
                            linkLabel="get in touch with us"
                            linkHref="mailto:groundstation@decenspace.com"
                            zIndex={1}
                        />
                    </Stack>
                </Box>
                <Box gridArea={GridArea.below}>
                    <Button>read the whitepaper</Button>
                </Box>
            </PageGridContainer>
            <Box component="footer" bgcolor="background.default" height={180} marginTop={{ xs: 0, sm: 8 }}>
                <Container sx={{ paddingTop: 6, paddingBottom: 6 }}>
                    <Typography variant="body1">
                        © 2025 DecenSpace
                    </Typography>
                </Container>
            </Box>
        </ThemeProvider>
    </StrictMode>
);
