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
        position: 'fixed',
        top: 30,
        right: 30,
        zIndex: 1000,
      }}
    >
<StartPageButton
  component="a"
  href="mailto:info@decenspace.com"
  sx={{
    // --- KEY CHANGE: Remove all padding from the button itself ---
    padding: 0,

    // Set the base font size for the button
    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
    
    // Use a large border-radius for a guaranteed "pill" shape
    borderRadius: '999px',

    // Keep other necessary container styles
    display: 'inline-flex',
    textDecoration: "none",
    overflow: 'hidden', // Important when removing padding
    background: "linear-gradient(135deg, rgba(1, 5, 50, 0.7) 0%, rgba(40, 107, 220, 0.6) 100%)",
    color: "#F5F5F5",
    boxShadow: "0 2px 12px 0 rgba(1,5,50,0.08)",
    fontFamily: "Satoshi",
    fontWeight: 500,
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "linear-gradient(135deg, rgba(1, 5, 50, 0.8) 0%, rgba(40, 107, 220, 0.7) 100%)",
      boxShadow: "0 4px 20px 0 rgba(40,107,220,0.15)",
      transform: "translateY(-2px)",
    },
  }}
>
  {/* This span is the inner wrapper. It holds the content and padding. */}
  <Box
    component="span"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // --- Apply the scalable padding HERE instead of the button ---
      padding: '0.75em 1.5em',
    }}
  >
    <EmailIcon sx={{ fontSize: '1.2em', mr: '0.6em' }} />
    Contact us
  </Box>
</StartPageButton>
    </Box>

    {/* Parallax dish image section */}
    <Box
      sx={{
        width: '100vw',
        height: '50vh',
        position: 'relative',
        overflow: 'hidden',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <Parallax speed={-10}>
        <Box
          component="img"
          src="/assets/dish_hq.png"
          alt="Ground station dish"
          sx={{
            width: '100%',
            height: '200%',
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'translateY(-33%)',
            minHeight: '100vh',
          }}
        />
      </Parallax>
      {/* Subtle overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(245, 245, 245, 0.05) 0%, rgba(219, 229, 255, 0.02) 100%)',
          zIndex: 1,
        }}
      />
    </Box>

    {/* Audience Buttons Section - Full Width */}
    <Box
      sx={{
        width: '100vw',
        paddingY: 8,
        background:  'linear-gradient(10deg, #F5F5F5 0%, #DBE5FF 100%)',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '/assets/gradient-2.jpg',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.03,
          zIndex: 0,
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'clamp(1.5rem, 6vw, 12rem)', // Better gap scaling
            maxWidth: 'none', // Remove fixed max width
            width: 'clamp(250px, 80vw, 1600px)', // Better width scaling
            mx: 'auto',
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
              flex: 1,
              maxWidth: 'clamp(150px, 40vw, 700px)', // Better max width
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
              flex: 1,
              maxWidth: 'clamp(150px, 40vw, 700px)', // Better max width
            }}
          />
        </Box>
      </Container>
    </Box>

    {/* Main Content Section */}
    <Box
      sx={{
        background: 'linear-gradient(135deg, #F5F5F5 0%, #DBE5FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/assets/gradient-2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0,
        }
      }}
    >
      <Container sx={{ 
        maxWidth: '1400px', 
        mx: 'auto', 
        px: { xs: 3, sm: 6 },
        position: 'relative',
        zIndex: 1,
      }}>
        <Box sx={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
        <TextSection heading="About Our Mission" first>
          <Typography
            variant="h4"
            className="proportional-medium"
            sx={{ 
              fontFamily: "Satoshi", 
              fontWeight: 500, 
              background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 'clamp(1rem, 4vw, 8rem)',
              maxWidth: '100%',
              lineHeight: 1.7,
            }}
          >
            The Space Communications Revolution Starts Here. We're building the
            infrastructure backbone for the new space economy. As satellites
            multiply from thousands to tens of thousands, the ground station
            bottleneck threatens to limit humanity's space ambitions. Decen
            Space solves this with a decentralized marketplace that turns
            distributed ground stations into a unified, efficient network.
          </Typography>
        </TextSection>
        
        <TextSection heading="The Problem We're Solving">
          <Typography
            variant="body1"
            className="proportional-small"
            sx={{ 
              fontFamily: "Rubik", 
              fontWeight: 400, 
              color: "#121212",
              lineHeight: 1.7,
            }}
          >
            The space industry is hitting a wall. Traditional ground station
            infrastructure is expensive, centralized, and can't scale fast
            enough. Satellite operators pay premium prices for limited coverage
            windows, while potential ground station operators have no easy way
            to monetize their infrastructure.
          </Typography>
          <Typography
            variant="h3"
            className="proportional-large"
            sx={{
              marginTop: '3vw',
              marginBottom: '3vw',
              background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Satoshi",
              fontWeight: 500,
            }}
          >
            28,000 satellites by 2030
          </Typography>
          <Typography
            variant="body1"
            className="proportional-small"
            sx={{ 
              fontFamily: "Rubik", 
              fontWeight: 400, 
              color: "#121212",
              lineHeight: 1.7,
            }}
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
            className="proportional-small"
            sx={{ 
              fontFamily: "Rubik", 
              fontWeight: 400, 
              color: "#121212",
              lineHeight: 1.7,
            }}
          >
            Decen Space transforms scattered ground stations into a unified,
            efficient marketplace. Using blockchain technology and cryptographic
            verification, we create trustless coordination between satellite
            operators and ground station owners worldwide.
          </Typography>
          <Typography
            variant="h6"
            className="proportional-small"
            sx={{
              marginTop: '3vw',
              marginBottom: '2vw',
              background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Satoshi",
              fontWeight: 500,
            }}
          >
            Here's how it works:
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
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Automated scheduling matches satellites with optimal ground
              stations based on location, timing, and performance
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Smart contracts handle payments automatically, eliminating
              middlemen and reducing costs
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Cryptographic verification ensures service quality without
              centralized oversight
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
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
            sx={{
              marginBottom: 3,
              background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Satoshi",
              fontWeight: 500,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            For Satellite Operators:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 3, marginBottom: 6 }}>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Dramatically lower costs through competitive marketplace pricing
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Global coverage with access to distributed ground stations
              worldwide
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Transparent performance metrics with real-time quality
              verification
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Scalable capacity that grows with your mission needs
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              marginBottom: 3,
              background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Satoshi",
              fontWeight: 500,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            For Ground Station Operators:
          </Typography>
          <Box component="ul" sx={{ marginLeft: 3 }}>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              New revenue streams from existing or new infrastructure
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Fair compensation based on contribution quality and strategic
              value
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Automated operations with minimal manual intervention required
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{
                marginBottom: 2,
                fontFamily: "Rubik",
                fontWeight: 400,
                color: "#010532",
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Growing market opportunity as satellite demand accelerates
            </Typography>
          </Box>
        </TextSection>

        <TextSection heading="Why Decentralized Infrastructure Matters">
          <Typography
            variant="body1"
            className="proportional-small"
            sx={{ 
              fontFamily: "Rubik", 
              fontWeight: 400, 
              color: "#121212",
              lineHeight: 1.7,
            }}
          >
            Traditional centralized solutions create single points of failure
            and bottlenecks. Our decentralized approach distributes both risk
            and opportunity, creating a more resilient and efficient network.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: 3,
              fontFamily: "Rubik",
              fontWeight: 400,
              color: "#010532",
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
            }}
          >
            Blockchain technology enables what wasn't possible before: trustless
            coordination at global scale, automated quality verification, and
            fair value distribution without central authorities taking outsized
            profits.
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
              fontSize: { xs: '2rem', sm: '2.5rem' },
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
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
            }}
          >
            The space economy is expanding rapidly. Companies and organizations
            that build the infrastructure backbone today will capture the most
            value as this market scales. Ready to be part of the space
            communications revolution?
          </Typography>
        </TextSection>

        <Box sx={{ textAlign: 'center', marginTop: 8 }}>
          <StartPageButton
            size="large"
            component="a"
            href="/#newsletter-signup-form"
            sx={{
              textDecoration: "none",
              background: "linear-gradient(135deg, rgba(1, 5, 50, 0.7) 0%, rgba(40, 107, 220, 0.6) 100%)",
              color: "#F5F5F5",
              paddingX: 4,
              paddingY: 2,
              borderRadius: 12,
              boxShadow: "0 4px 16px 0 rgba(1,5,50,0.1)",
              fontFamily: "Satoshi",
              fontWeight: 500,
              fontSize: 'clamp(0.9rem, 1.2vw, 1.5rem)',
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, rgba(1, 5, 50, 0.8) 0%, rgba(40, 107, 220, 0.7) 100%)",
                boxShadow: "0 6px 24px 0 rgba(40,107,220,0.2)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Subscribe to our newsletter
          </StartPageButton>
        </Box>
      </Box>
    </Container>
    </Box>

    {/* Parallax close-up image section */}
    <Box
      sx={{
        width: '100vw',
        height: '50vh',
        position: 'relative',
        overflow: 'hidden',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <Parallax speed={-8}>
        <Box
          component="img"
          src="/assets/close-up-01.jpg"
          alt="Ground station close-up"
          sx={{
            width: '100%',
            height: '130%',
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'translateY(-33%)',
            minHeight: '100vh',
          }}
        />
      </Parallax>
      {/* Subtle overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(245, 245, 245, 0.05) 0%, rgba(219, 229, 255, 0.02) 100%)',
          zIndex: 1,
        }}
      />
    </Box>

    <SponsorsSection />
    
    <Box 
      component="footer" 
      sx={{
        background: 'linear-gradient(135deg, #F5F5F5 0%, #DBE5FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/assets/gradient-2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0,
        }
      }}
    >
      <Container sx={{ 
        paddingTop: 'clamp(1.5rem, 6vw, 12rem)', 
        paddingBottom: 'clamp(1.5rem, 6vw, 12rem)',
        position: 'relative',
        zIndex: 1,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 3,
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#010532',
              opacity: 0.8,
              fontSize: '0.8vw',
            }}
          >
            © 2025 DecenSpace
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            gap: 1,
          }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#010532',
                opacity: 0.7,
                fontSize: 'clamp(0.6rem, 0.8vw, 1rem)',
                marginBottom: 1,
              }}
            >
              Follow us
            </Typography>
            <Box sx={{
              display: 'flex',
              gap: 2,
            }}>
              <InlineIconLink
                aria-label="X profile"
                href="https://x.com/decenspace"
                target="_blank"
                sx={{
                  color: '#010532',
                  opacity: 0.7,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#286BDC',
                    opacity: 1,
                    transform: 'translateY(-1px)',
                  }
                }}
              >
                <X />
              </InlineIconLink>
              <InlineIconLink
                aria-label="LinkedIn profile"
                href="https://www.linkedin.com/company/decen-space"
                target="_blank"
                sx={{
                  color: '#010532',
                  opacity: 0.7,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#286BDC',
                    opacity: 1,
                    transform: 'translateY(-1px)',
                  }
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
