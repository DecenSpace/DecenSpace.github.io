import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageGridContainer, { GridArea } from "components/PageGridContainer";
import TextSection from "components/TextSection";
import { ParallaxProvider } from "react-scroll-parallax";
import MobileParallaxDishImage from "components/MobileParallaxDishImage";
import AudienceButtons from "components/AudienceButtons";
import InlineIconLink from "components/InlineIconLink";
import X from "@mui/icons-material/X";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import StartPageButton from "components/StartPageButton";
import EmailIcon from "@mui/icons-material/Email";
import SponsorsSection from "components/SponsorsSection";
import DecenSpaceMainPageLogo from "components/DecenSpaceMainPageLogo";

const Home: React.FC = () => (
  <ParallaxProvider>
    <PageGridContainer>
      <Box
        gridArea={GridArea.above}
        justifySelf="end"
        marginBottom={10}
        marginTop={{ xs: 6, sm: 0 }}
      >
        <StartPageButton
          size="large"
          component="a"
          href="mailto:info@decenspace.com"
          sx={{
            textDecoration: "none",
            background:
              "linear-gradient(90deg, rgba(20,30,48,0.85) 0%, rgba(36,0,70,0.85) 100%)",
            color: "#fff",
            paddingX: 4,
            paddingY: 2,
            borderRadius: 999,
            boxShadow: "0 4px 24px 0 rgba(36,0,70,0.18)",
            fontWeight: 700,
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            border: "1.5px solid rgba(106,90,249,0.25)",
            backdropFilter: "blur(6px)",
            transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 153, 1)",
              boxShadow:
                "0 0 16px 4px #4169E1, 0 8px 32px 0 rgba(0, 0, 153, 1)",
              borderColor: "#4169E1",
              transform: "scale(1.06)",
            },
          }}
        >
          <EmailIcon sx={{ mr: 1, fontSize: 28 }} /> Contact us
        </StartPageButton>
      </Box>
      <Box component="header" gridArea={GridArea.head}>
        <DecenSpaceMainPageLogo />
        <Typography
          variant="h2"
          marginBottom={3}
          sx={{ color: "#010532", fontFamily: "Satoshi", fontWeight: 500 }}
        >
          Powering the Future of Space Communications
        </Typography>
        <Box marginRight={{ xs: 0, sm: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Rubik", fontWeight: 400, color: "#010532" }}
          >
            The Space Communications Revolution Starts Here. We're building the
            infrastructure backbone for the new space economy. As satellites
            multiply from thousands to tens of thousands, the ground station
            bottleneck threatens to limit humanity's space ambitions. Decen
            Space solves this with a decentralized marketplace that turns
            distributed ground stations into a unified, efficient network.
          </Typography>
          <MobileParallaxDishImage marginTop={4} marginBottom={8} />
        </Box>
      </Box>
      <Box gridArea={GridArea.main} paddingTop={{ xs: 8, sm: 16 }}>
        <TextSection heading="The Problem We're Solving" first>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Rubik", fontWeight: 400, color: "#010532" }}
          >
            The space industry is hitting a wall. Traditional ground station
            infrastructure is expensive, centralized, and can't scale fast
            enough. Satellite operators pay premium prices for limited coverage
            windows, while potential ground station operators have no easy way
            to monetize their infrastructure.
          </Typography>
          <Typography
            variant="h3"
            sx={{
              marginTop: 3,
              marginBottom: 3,
              color: "#286BDC",
              fontFamily: "Satoshi",
              fontWeight: 700,
            }}
          >
            28,000 satellites by 2030
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Rubik", fontWeight: 400, color: "#010532" }}
          >
            By 2030, over 28,000 satellites will orbit Earth. Current ground
            station capacity simply won't meet this demand. The result? Higher
            costs, communication delays, and missed opportunities that could
            slow space innovation when we need it most.
          </Typography>
        </TextSection>
        <TextSection heading="Our Solution: A Decentralized Space Communications Network">
          <Typography
            variant="body1"
            sx={{ fontFamily: "Rubik", fontWeight: 400, color: "#010532" }}
          >
            Decen Space transforms scattered ground stations into a unified,
            efficient marketplace. Using blockchain technology and cryptographic
            verification, we create trustless coordination between satellite
            operators and ground station owners worldwide.
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              marginTop: 3,
              marginBottom: 2,
              color: "#286BDC",
              fontFamily: "Satoshi",
              fontWeight: 700,
            }}
          >
            Here's how it works:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 2 }}>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Automated scheduling matches satellites with optimal ground
              stations based on location, timing, and performance
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Smart contracts handle payments automatically, eliminating
              middlemen and reducing costs
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Cryptographic verification ensures service quality without
              centralized oversight
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Economic incentives reward ground station operators for strategic
              positioning and reliable service
            </Typography>
          </Box>
        </TextSection>
        <TextSection heading="The Benefits">
          <Typography
            variant="h6"
            color="primary"
            sx={{
              marginBottom: 2,
              color: "#286BDC",
              fontFamily: "Satoshi",
              fontWeight: 700,
            }}
          >
            For Satellite Operators:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 2, marginBottom: 3 }}>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Dramatically lower costs through competitive marketplace pricing
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Global coverage with access to distributed ground stations
              worldwide
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Transparent performance metrics with real-time quality
              verification
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Scalable capacity that grows with your mission needs
            </Typography>
          </Box>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              marginBottom: 2,
              color: "#286BDC",
              fontFamily: "Satoshi",
              fontWeight: 700,
            }}
          >
            For Ground Station Operators:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 2 }}>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              New revenue streams from existing or new infrastructure
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Fair compensation based on contribution quality and strategic
              value
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Automated operations with minimal manual intervention required
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 1,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
              }}
            >
              Growing market opportunity as satellite demand accelerates
            </Typography>
          </Box>
        </TextSection>
        <TextSection heading="Why Decentralized Infrastructure Matters">
          <Typography
            variant="body1"
            sx={{ fontFamily: "Rubik", fontWeight: 400, color: "#010532" }}
          >
            Traditional centralized solutions create single points of failure
            and bottlenecks. Our decentralized approach distributes both risk
            and opportunity, creating a more resilient and efficient network.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              fontFamily: "Rubik",
              fontWeight: 400,
              color: "#010532",
            }}
          >
            Blockchain technology enables what wasn't possible before: trustless
            coordination at global scale, automated quality verification, and
            fair value distribution without central authorities taking outsized
            profits.
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            sx={{
              marginTop: 3,
              color: "#286BDC",
              fontFamily: "Satoshi",
              fontWeight: 700,
            }}
          >
            Join the Network
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              fontFamily: "Rubik",
              fontWeight: 400,
              color: "#010532",
            }}
          >
            The space economy is expanding rapidly. Companies and organizations
            that build the infrastructure backbone today will capture the most
            value as this market scales. Ready to be part of the space
            communications revolution?
          </Typography>
        </TextSection>
        <StartPageButton
          size="large"
          component="a"
          href="/#newsletter-signup-form"
          sx={{
            textDecoration: "none",
            background:
              "linear-gradient(90deg, rgba(20,30,48,0.85) 0%, rgba(36,0,70,0.85) 100%)",
            color: "#fff",
            paddingX: 4,
            paddingY: 2,
            borderRadius: 999,
            boxShadow: "0 4px 24px 0 rgba(36,0,70,0.18)",
            fontWeight: 700,
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            border: "1.5px solid rgba(106,90,249,0.25)",
            backdropFilter: "blur(6px)",
            transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 153, 1)",
              boxShadow:
                "0 0 16px 4px #4169E1, 0 8px 32px 0 rgba(0, 0, 153, 1)",
              borderColor: "#4169E1",
              transform: "scale(1.06)",
            },
          }}
        >
          Subscribe to our newsletter
        </StartPageButton>
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
    </PageGridContainer>
    <SponsorsSection />
    <Box component="footer" height={240}>
      <Container sx={{ paddingTop: 6, paddingBottom: 6 }}>
        <Typography variant="body1">© 2025 DecenSpace</Typography>
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

export default Home;
