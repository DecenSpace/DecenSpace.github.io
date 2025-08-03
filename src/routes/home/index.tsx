import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageGridContainer, { GridArea } from "components/PageGridContainer";
import TextSection from "components/TextSection";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import MobileParallaxDishImage from "components/MobileParallaxDishImage";
import AudienceButtons from "components/AudienceButtons";
import InlineIconLink from "components/InlineIconLink";
import X from "@mui/icons-material/X";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import StartPageButton from "components/StartPageButton";
import EmailIcon from "@mui/icons-material/Email";
import SponsorsSection from "components/SponsorsSection";
import AnimatedHeader from "components/AnimatedHeader";
import EnumerationItem from "components/EnumerationItem";

const Home: React.FC = () => (
  <ParallaxProvider>
    {/* Animated Header */}
    <AnimatedHeader />

    {/* Contact Button */}
    <Box
      sx={{
        position: "fixed",
        top: 30,
        right: 30,
        zIndex: 1000,
      }}
    >
      <StartPageButton
        size="large"
        component="a"
        href="mailto:info@decenspace.com"
        sx={{
          textDecoration: "none",
          background:
            "linear-gradient(135deg, rgba(1, 5, 50, 0.7) 0%, rgba(40, 107, 220, 0.6) 100%)",
          color: "#F5F5F5",
          paddingX: 2.5,
          paddingY: 1,
          borderRadius: 8,
          boxShadow: "0 2px 12px 0 rgba(1,5,50,0.08)",
          fontFamily: "Satoshi",
          fontWeight: 500,
          fontSize: { xs: "0.875rem", sm: "1.5rem" },
          display: "flex",
          alignItems: "center",
          gap: 1,
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(1, 5, 50, 0.8) 0%, rgba(40, 107, 220, 0.7) 100%)",
            boxShadow: "0 4px 20px 0 rgba(40,107,220,0.15)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <EmailIcon sx={{ mr: 1, fontSize: 30 }} /> Contact us
      </StartPageButton>
    </Box>

    {/* Parallax dish image section */}
    <Box
      sx={{
        width: "100vw",
        height: "50vh",
        position: "relative",
        overflow: "hidden",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <Parallax speed={-10}>
        <Box
          component="img"
          src="/assets/dish_hq.png"
          alt="Ground station dish"
          sx={{
            width: "100%",
            height: "200%",
            objectFit: "cover",
            objectPosition: "center",
            transform: "translateY(-33%)",
            minHeight: "100vh",
          }}
        />
      </Parallax>
      {/* Subtle overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(245, 245, 245, 0.05) 0%, rgba(219, 229, 255, 0.02) 100%)",
          zIndex: 1,
        }}
      />
    </Box>

    {/* Audience Buttons Section - Full Width */}
    <Box
      sx={{
        width: "100vw",
        paddingY: 8,
        background: "linear-gradient(10deg, #F5F5F5 0%, #DBE5FF 100%)",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "/assets/gradient-2.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.03,
          zIndex: 0,
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 4, sm: 8 },
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <EnumerationItem
            num={1}
            label="Satellite operators"
            linkLabel="get in touch with us"
            href="mailto:satellites@decenspace.com"
            sx={{
              flexShrink: 0,
              fontFamily: "Satoshi",
              flex: { xs: "none", sm: "1" },
              maxWidth: { xs: "100%", sm: "45%" },
            }}
          />
          <EnumerationItem
            num={2}
            label="Ground station operators"
            linkLabel="get in touch with us"
            href="mailto:groundstation@decenspace.com"
            sx={{
              flexShrink: 0,
              fontFamily: "Satoshi",
              flex: { xs: "none", sm: "1" },
              maxWidth: { xs: "100%", sm: "45%" },
            }}
          />
        </Box>
      </Container>
    </Box>

    {/* Main Content Section */}
    <Box
      sx={{
        background: "linear-gradient(135deg, #F5F5F5 0%, #DBE5FF 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/assets/gradient-2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          zIndex: 0,
        },
      }}
    >
      <Container
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 3, sm: 6 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ paddingTop: 8, paddingBottom: 8 }}>
          <TextSection heading="About Our Mission" first>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Satoshi",
                fontWeight: 500,
                background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: 6,
                maxWidth: "100%",
                lineHeight: 1.7,
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Space communications infrastructure that scales with the industry.
              Satellite constellations are exploding from thousands to tens of
              thousands. Traditional ground station access can't keep up. Decen
              Space connects every type of ground station, from enterprise
              facilities to individual operators, into one unified network.
            </Typography>
          </TextSection>

          <TextSection heading="The Problem">
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#121212",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              Ground station bottlenecks are limiting the space economy.
              Satellite operators need more coverage options at competitive
              prices. Meanwhile, ground stations of all sizes, from major
              service providers to individual operators, need better ways to
              maximize their infrastructure value.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginTop: 4,
                marginBottom: 4,
                background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Satoshi",
                fontWeight: 500,
                fontSize: { xs: "2rem", sm: "2.5rem" },
              }}
            >
              28,000 satellites by 2030
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#121212",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              Current capacity won't meet demand. Result: higher costs, delays,
              missed opportunities.
            </Typography>
          </TextSection>

          <TextSection heading="Our Solution">
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#121212",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              We orchestrate across all ground station types, from major telecom
              facilities, university stations, even to amateur radio operators,
              and everything in between. Intelligent coordination creates one
              seamless global network that amplifies everyone's capabilities.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: 4,
                marginBottom: 3,
                background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Satoshi",
                fontWeight: 500,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              How it works
            </Typography>
            <Box component="ul" sx={{ marginLeft: 3, marginBottom: 4 }}>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Smart scheduling matches satellites with optimal ground stations
                regardless of size
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Automated coordination streamlines operations and reduces
                operational overhead
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Performance metrics ensure quality through transparency across
                all network participants
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Market incentives reward any operator for strategic positioning
                and reliability
              </Typography>
            </Box>
          </TextSection>

          <TextSection heading="For Ground Station Operators">
            <Box component="ul" sx={{ marginLeft: 3 }}>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Expanding revenue streams for all ground station operators,
                whether you're a telecom giant or individual operator
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Performance-based compensation scaled to your contribution
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Enhanced operational efficiency through automated coordination
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Access to broader customer base while maintaining your existing
                relationships
              </Typography>
            </Box>
          </TextSection>

          <TextSection heading="For Satellite Operators">
            <Box component="ul" sx={{ marginLeft: 3, marginBottom: 6 }}>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Up to 60% cost reduction in ground services through network
                efficiency
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Global coverage connecting diverse ground station operators,
                including your current providers
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Real-time monitoring with transparent metrics across all
                providers
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontFamily: "Rubik",
                  fontWeight: 400,
                  color: "#010532",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                Scalable capacity that grows with demand
              </Typography>
            </Box>
          </TextSection>

          <TextSection heading="Why Network Effects Win">
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#121212",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              Fragmented ground station access creates inefficiencies for
              everyone. Our network approach enhances what already exists,
              creating a rising tide that benefits all participants in the
              ecosystem.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginTop: 6,
                background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Satoshi",
                fontWeight: 500,
                fontSize: { xs: "2rem", sm: "2.5rem" },
              }}
            >
              Join the Network
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 3,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              The space economy is expanding rapidly. Build tomorrow's
              infrastructure today. Ready to power the future of space
              communications?
            </Typography>
          </TextSection>

          <Box sx={{ textAlign: "center", marginTop: 8 }}>
            <StartPageButton
              size="large"
              component="a"
              href="/#newsletter-signup-form"
              sx={{
                textDecoration: "none",
                background:
                  "linear-gradient(135deg, rgba(1, 5, 50, 0.7) 0%, rgba(40, 107, 220, 0.6) 100%)",
                color: "#F5F5F5",
                paddingX: 4,
                paddingY: 2,
                borderRadius: 12,
                boxShadow: "0 4px 16px 0 rgba(1,5,50,0.1)",
                fontFamily: "Satoshi",
                fontWeight: 500,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                transition: "all 0.3s ease",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(1, 5, 50, 0.8) 0%, rgba(40, 107, 220, 0.7) 100%)",
                  boxShadow: "0 6px 24px 0 rgba(40,107,220,0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Keep up with what we are doing here!
            </StartPageButton>
          </Box>
        </Box>
      </Container>
    </Box>

    {/* Parallax close-up image section */}
    <Box
      sx={{
        width: "100vw",
        height: "50vh",
        position: "relative",
        overflow: "hidden",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <Parallax speed={-8}>
        <Box
          component="img"
          src="/assets/close-up-01.jpg"
          alt="Ground station close-up"
          sx={{
            width: "100%",
            height: "130%",
            objectFit: "cover",
            objectPosition: "center",
            transform: "translateY(-33%)",
            minHeight: "100vh",
          }}
        />
      </Parallax>
      {/* Subtle overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(245, 245, 245, 0.05) 0%, rgba(219, 229, 255, 0.02) 100%)",
          zIndex: 1,
        }}
      />
    </Box>

    <SponsorsSection />

    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #F5F5F5 0%, #DBE5FF 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/assets/gradient-2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          zIndex: 0,
        },
      }}
    >
      <Container
        sx={{
          paddingTop: 8,
          paddingBottom: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#010532",
              opacity: 0.8,
              fontSize: "0.875rem",
            }}
          >
            © 2025 DecenSpace
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", sm: "flex-end" },
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#010532",
                opacity: 0.7,
                fontSize: "0.875rem",
                marginBottom: 1,
              }}
            >
              Follow us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <InlineIconLink
                aria-label="X profile"
                href="https://x.com/decenspace"
                target="_blank"
                sx={{
                  color: "#010532",
                  opacity: 0.7,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#286BDC",
                    opacity: 1,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <X />
              </InlineIconLink>
              <InlineIconLink
                aria-label="LinkedIn profile"
                href="https://www.linkedin.com/company/decen-space"
                target="_blank"
                sx={{
                  color: "#010532",
                  opacity: 0.7,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#286BDC",
                    opacity: 1,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <LinkedIn />
              </InlineIconLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </ParallaxProvider>
);

export default Home;
