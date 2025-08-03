import Box from "@mui/material/Box";
import TextSection from "components/TextSection";
import Typography from "@mui/material/Typography";
import StartPageButton from "components/StartPageButton";
import { gradientText } from "utils/style-utils";
import ContentSection from "../ContentSection";

const MissionSection = () => (
  <ContentSection>
    <TextSection heading="About Our Mission" first>
      <Typography
        variant="h4"
        className="proportional-medium"
        sx={{
          fontFamily: "Satoshi",
          fontWeight: 500,
          ...gradientText,
          marginBottom: "clamp(1rem, 4rem, 8rem)",
          marginTop: "clamp(1rem, 4rem, 8rem)",
          maxWidth: "100%",
          lineHeight: 1.7,
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
        }}
      >
        Space communications infrastructure that scales with the industry.
        Satellite constellations are exploding from thousands to tens of
        thousands. Traditional ground station access can't keep up. Decen Space
        connects every type of ground station, from enterprise facilities to
        individual operators, into one unified network.
      </Typography>
    </TextSection>

    <TextSection heading="The Problem">
      <Typography
        variant="body1"
        className="proportional-small"
        sx={{
          fontFamily: "Rubik",
          fontWeight: 400,
          color: "#121212",
          lineHeight: 1.7,
          marginTop: "3rem",
          fontSize: { xs: "1rem", sm: "1.1rem" },
        }}
      >
        Ground station bottlenecks are limiting the space economy. Satellite
        operators need more coverage options at competitive prices. Meanwhile,
        ground stations of all sizes, from major service providers to individual
        operators, need better ways to maximize their infrastructure value.
      </Typography>
      <Typography
        variant="h3"
        className="proportional-large"
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
          ...gradientText,
          fontFamily: "Satoshi",
          fontWeight: 500,
        }}
      >
        28,000+ satellites in orbit by 2030
      </Typography>
      <Typography
        variant="body1"
        className="proportional-small"
        sx={{
          fontFamily: "Rubik",
          fontWeight: 400,
          color: "#121212",
          lineHeight: 1.7,
          fontSize: { xs: "1rem", sm: "1.1rem" },
        }}
      >
        Current capacity won't meet demand. Result: higher costs, delays, missed
        opportunities.
      </Typography>
    </TextSection>

    <TextSection heading="Our Solution">
      <Typography
        variant="body1"
        className="proportional-small"
        sx={{
          fontFamily: "Rubik",
          fontWeight: 400,
          color: "#121212",
          lineHeight: 1.7,
          marginTop: "3rem",
          fontSize: { xs: "1rem", sm: "1.1rem" },
        }}
      >
        We orchestrate across all ground station types, from major telecom
        facilities, university stations, even to amateur radio operators, and
        everything in between. Intelligent coordination creates one seamless
        global network that amplifies everyone's capabilities.
      </Typography>
      <Typography
        variant="h6"
        className="proportional-small"
        sx={{
          marginTop: "3rem",
          marginBottom: "2rem",
          ...gradientText,
          fontFamily: "Satoshi",
          fontWeight: 500,
        }}
      >
        How it works:
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
          Automated coordination streamlines operations and reduces operational
          overhead
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
          Performance metrics ensure quality through transparency across all
          network participants
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
          Market incentives reward any operator for strategic positioning and
          reliability
        </Typography>
      </Box>
    </TextSection>

    <TextSection heading="For Ground Station Operators">
      <Box component="ul" sx={{ marginLeft: 3, marginBottom: 6 }}>
        <Typography
          component="li"
          variant="body1"
          sx={{
            marginBottom: 2,
            marginTop: "3rem",
            fontFamily: "Rubik",
            fontWeight: 400,
            color: "#010532",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.7,
          }}
        >
          Exanping revenue streams for all ground station operators, whether
          you're a telecom giant or individual operator
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
            marginTop: "3rem",
            fontFamily: "Rubik",
            fontWeight: 400,
            color: "#010532",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.7,
          }}
        >
          Up to 60% cost reduction in ground services through network efficiency
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
          Global coverage connecting diverse ground station operators, including
          your current providers
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
          Real-time monitoring with transparent metrics across all providers
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
        className="proportional-small"
        sx={{
          fontFamily: "Rubik",
          marginTop: "3rem",
          fontWeight: 400,
          color: "#121212",
          lineHeight: 1.7,
          fontSize: { xs: "1rem", sm: "1.1rem" },
        }}
      >
        Fragmented ground station access creates inefficiencies for everyone.
        Our network approach enhances what already exists, creating a rising
        tide that benefits all participants in the ecosystem.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          marginTop: 6,
          ...gradientText,
          fontFamily: "Satoshi",
          fontWeight: 500,
          fontSize: { xs: "4rem", sm: "4.5rem" },
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
        The space economy is expanding rapidly. Build tomorrow's infrastructure
        today. Ready to power the future of space communications?
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
          fontSize: "clamp(0.9rem, 1.2rem, 1.5rem)",
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
  </ContentSection>
);

export default MissionSection;
