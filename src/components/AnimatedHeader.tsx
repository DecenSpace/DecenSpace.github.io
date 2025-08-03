import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery, useTheme } from "@mui/material";

const AnimatedHeader: React.FC = () => {
  const theme = useTheme();
  // Check if the screen is 'sm' or larger. This will be true for iPads and desktops.
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        minHeight: "100vh", // Use 100vh for a full-screen initial view
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #F5F5F5 0%, #DBE5FF 100%)",
      }}
    >
      {/* --- Backgrounds and Overlays --- */}
      <Parallax speed={isMobile ? 0 : -5}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/assets/Close-up-gs-01.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            zIndex: 1,
          }}
        />
      </Parallax>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(245, 245, 245, 0.3) 0%, rgba(219, 229, 255, 0.2) 100%)",
          zIndex: 2,
        }}
      />

      {/* --- Main Content Wrapper --- */}
      <Box
        sx={{
          position: "relative",
          zIndex: 4,
          textAlign: "center",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3 }, // Adjust padding for mobile
          width: "100%",
        }}
      >
        <Parallax speed={isMobile ? 0 : -1}>
          <Box
            component="img"
            src="/assets/icons/decenspacetitle.svg"
            alt="DecenSpace"
            sx={{
              width: "clamp(180px, 40vw, 400px)", // Adjusted clamp for better mobile scaling
              height: "auto",
              marginBottom: "clamp(1rem, 3vw, 2rem)",
            }}
          />
        </Parallax>
        <Parallax speed={isMobile ? 0 : -0.5}>
          <Typography
            variant="h1"
            className="proportional-large"
            fontSize={12}
            sx={{
              color: "#010532",
              fontFamily: "Satoshi",
              fontWeight: 500,
              lineHeight: 1.2,
              marginTop: "clamp(1rem, 3vw, 5rem)",
              marginBottom: "clamp(0.75rem, 2vw, 4rem)",
            }}
          >
            Powering the Future of
            <br />
            Space Communications
          </Typography>
        </Parallax>
        <Parallax speed={isMobile ? 0 : -0.25}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Rubik",
              fontWeight: 400,
              color: "#010532",
              maxWidth: "clamp(300px, 60vw, 800px)",
              mx: "auto",
              lineHeight: 1.6,
              opacity: 0.8,
              marginTop: { xs: 2, sm: 3 },
              // Responsive font size
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.25rem",
              },
            }}
          >
            The Space Communications Revolution Starts Here. We're building the
            network infrastructure backbone for the new space economy.
          </Typography>
        </Parallax>
      </Box>

      {/* --- Scroll Indicator --- */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "1.5rem", sm: "2rem" },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          color: "#010532",
          opacity: 0.8,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            fontWeight: 500,
          }}
        >
          Scroll to explore
        </Typography>
        <Box
          sx={{
            "@keyframes bounce-animation": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(5px)" },
            },
            animation: "bounce-animation 2s infinite",
            lineHeight: 0, // Prevents extra space
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12L12 16L8 12"
              stroke="#010532"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 6L12 10L8 6"
              stroke="#010532"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedHeader;
