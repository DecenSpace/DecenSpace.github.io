import Box from "@mui/material/Box";
import { GridArea } from "./components/PageGridContainer";
import TextSection from "./components/TextSection";
import MobileParallaxDishImage from "./components/MobileParallaxDishImage";
import AudienceButtons from "./components/AudienceButtons";
import Typography from "@mui/material/Typography";
import StartPageButton from "./components/StartPageButton";
import RolesSelectMenu from "./components/RolesSelectMenu";
import TitleLogo from "./components/TitleLogo";

const Home: React.FC = () => (
    <>
        <RolesSelectMenu marginBottom={10} marginTop={{ xs: 6, sm: 0 }} />
        <Box component="header" gridArea={GridArea.head}>
            <TitleLogo />
            <Typography variant="h2" marginBottom={3}>
                Democratizing space communications
            </Typography>
            <Box marginRight={{ xs: 0, sm: 6 }}>
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
                    The space industry faces a critical infrastructure challenge: ground station access is expensive, centralized, and inefficient. Satellite operators struggle with limited coverage while existing ground stations sit underutilized. We built Decen Space to create a marketplace that transforms how the space industry communicates with satellites, democratizing access while rewarding participation.
                </Typography>
                <Typography variant="h3" color="primary" sx={{ marginTop: 3, marginBottom: 3 }}>
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
                <Typography variant="h3" color="primary" sx={{ marginTop: 3 }}>
                    Lower costs by higher efficiency
                </Typography>
            </TextSection>
            <TextSection heading="The network incentives">
                <Typography variant="body1">
                    Our economic model creates fair incentives for all participants, rewarding ground station operators based on contribution quality and strategic location. Satellite operators gain cost-effective access to a global communications network, with transparent pricing and performance metrics. This value-sharing approach ensures sustainable growth and aligns the interests of all participants for long-term success.
                </Typography>
                <Typography variant="h3" color="primary" sx={{ marginTop: 3 }}>
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
            <StartPageButton size="large" onClick={() => window.alert("We are working on that. Please contact us for any questions.")}>
                Read the whitepaper
            </StartPageButton>
        </Box>
    </>
);

export default Home;