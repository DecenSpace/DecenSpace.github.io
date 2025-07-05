import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
import Typography from "@mui/material/Typography";
import StartPageButton from "components/StartPageButton";
import EmailIcon from "@mui/icons-material/Email";

const GlowLogo = () => (
  <Box marginBottom={5} position="relative">
    <SvgIcon
      component={SvgDsLogo}
      color="text.primary"
      height={128}
      sx={{
        filter: "blur(6px)",
        opacity: 0.6,
        position: "absolute",
        left: 0,
        top: 0,
      }}
    />
    <SvgIcon
      component={SvgDsLogo}
      color="text.primary"
      height={128}
      zIndex={1}
    />
  </Box>
);

const SponsorsSection = () => (
  <Box
    sx={{
      backgroundColor: "background.paper",
      paddingY: 8,
      marginTop: 8,
    }}
  >
    <Container>
      <Typography variant="h3" textAlign="center" marginBottom={6}>
        Supported by
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={6}
        flexWrap="wrap"
      >
        <a
          href="https://1kx.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src="/assets/1kx-logo.png"
            alt="1kx"
            sx={{
              height: 60,
              objectFit: "contain",
              filter: "grayscale(100%)",
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
                opacity: 1,
              },
            }}
          />
        </a>
        <a
          href="https://outlierventures.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src="/assets/ov-logo.png"
            alt="OV"
            sx={{
              height: 60,
              objectFit: "contain",
              filter: "grayscale(100%)",
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
                opacity: 1,
              },
            }}
          />
        </a>
        <a
          href="https://www.euspa.europa.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src="/assets/euspa-logo.png"
            alt="EUSPA"
            sx={{
              height: 60,
              objectFit: "contain",
              filter: "grayscale(100%)",
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
                opacity: 1,
              },
            }}
          />
        </a>
        <a href="https://esa-bic.de/" target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src="/assets/ESA_BIC_NG_White.png"
            alt="ESA BIC Northern Germany"
            sx={{
              height: 60,
              maxWidth: 350,
              objectFit: "contain",
              filter: "grayscale(100%)",
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
                opacity: 1,
              },
            }}
          />
        </a>
      </Box>
    </Container>
  </Box>
);

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
        <GlowLogo />
        <Typography variant="h2" marginBottom={3}>
          Powering the Future of Space Communications
        </Typography>
        <Box marginRight={{ xs: 0, sm: 6 }}>
          <Typography variant="h4">
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
          <Typography variant="body1">
            The space industry is hitting a wall. Traditional ground station
            infrastructure is expensive, centralized, and can't scale fast
            enough. Satellite operators pay premium prices for limited coverage
            windows, while potential ground station operators have no easy way
            to monetize their infrastructure.
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 3 }}
          >
            28,000 satellites by 2030
          </Typography>
          <Typography variant="body1">
            By 2030, over 28,000 satellites will orbit Earth. Current ground
            station capacity simply won't meet this demand. The result? Higher
            costs, communication delays, and missed opportunities that could
            slow space innovation when we need it most.
          </Typography>
        </TextSection>
        <TextSection heading="Our Solution: A Decentralized Space Communications Network">
          <Typography variant="body1">
            Decen Space transforms scattered ground stations into a unified,
            efficient marketplace. Using blockchain technology and cryptographic
            verification, we create trustless coordination between satellite
            operators and ground station owners worldwide.
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 2 }}
          >
            Here's how it works:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 2 }}>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Automated scheduling matches satellites with optimal ground
              stations based on location, timing, and performance
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Smart contracts handle payments automatically, eliminating
              middlemen and reducing costs
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Cryptographic verification ensures service quality without
              centralized oversight
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Economic incentives reward ground station operators for strategic
              positioning and reliable service
            </Typography>
          </Box>
        </TextSection>
        <TextSection heading="The Benefits">
          <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
            For Satellite Operators:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 2, marginBottom: 3 }}>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Dramatically lower costs through competitive marketplace pricing
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Global coverage with access to distributed ground stations
              worldwide
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Transparent performance metrics with real-time quality
              verification
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Scalable capacity that grows with your mission needs
            </Typography>
          </Box>
          <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
            For Ground Station Operators:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 2 }}>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              New revenue streams from existing or new infrastructure
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Fair compensation based on contribution quality and strategic
              value
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Automated operations with minimal manual intervention required
            </Typography>
            <Typography component="li" variant="body1" sx={{ marginBottom: 1 }}>
              Growing market opportunity as satellite demand accelerates
            </Typography>
          </Box>
        </TextSection>
        <TextSection heading="Why Decentralized Infrastructure Matters">
          <Typography variant="body1">
            Traditional centralized solutions create single points of failure
            and bottlenecks. Our decentralized approach distributes both risk
            and opportunity, creating a more resilient and efficient network.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Blockchain technology enables what wasn't possible before: trustless
            coordination at global scale, automated quality verification, and
            fair value distribution without central authorities taking outsized
            profits.
          </Typography>
          <Typography variant="h3" color="primary" sx={{ marginTop: 3 }}>
            Join the Network
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            The space economy is expanding rapidly. Companies and organizations
            that build the infrastructure backbone today will capture the most
            value as this market scales. Ready to be part of the space
            communications revolution?
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
