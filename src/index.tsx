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
                    <Button>contact us</Button>
                </Box>
                <Box component="header" gridArea={GridArea.head}>
                    <SvgIcon component={SvgDsLogo} color="text.primary" height={128} marginBottom={5} />
                    <Typography variant="h2">
                        Decentralized space communication
                    </Typography>
                    <Box display="flex" flexDirection="row" gap={3}>
                        <Typography variant="h4">
                            Bringing satellite companies and ground station operators together using blockchain technology.
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </Typography>
                        <Typography variant="h3" sx={{ marginTop: 3, marginBottom: 3 }}>
                            28.000 satellites
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </Typography>
                    </TextSection>
                    <TextSection heading="How blockchain can help">
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </Typography>
                        <Typography variant="h3" sx={{ marginTop: 3 }}>
                            Lower costs by higher efficiency
                        </Typography>
                    </TextSection>
                    <TextSection heading="The reward token">
                    <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
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
                            zIndex={1}
                        />
                        <EnumerationItem
                            num={2}
                            label="Ground station operators"
                            linkLabel="get in touch with us"
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
