import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Parallax } from "react-scroll-parallax";

const AnimatedHeader: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: 'clamp(40rem, 95vh, 60rem)', // Header is now slightly shorter
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Restored original vertical alignment
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F5F5F5 0%, #DBE5FF 100%)',
      }}
    >
      {/* --- Backgrounds and Overlays (No Changes) --- */}
      <Parallax speed={-5}>
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
          px: 3,
          width: "100%",
          paddingBottom: "6rem", // Added padding to prevent overlap with scroll indicator
        }}
      >
<Parallax speed={-1}>
  <Box
    component="img"
    src="/assets/icons/decenspacetitle.svg"
    alt="DecenSpace"
    sx={{
      width: 'clamp(200px, 40vw, 600px)', // Increased minimum size from 25px

      height: 'auto',
      marginBottom: 'clamp(1rem, 3vw, 5rem)',
    }}
  />
</Parallax>
        <Parallax speed={-0.5}>
          <Typography
            variant="h1"
            className="proportional-large"
            sx={{
              color: "#010532",
              fontFamily: "Satoshi",
              fontWeight: 500,
              marginTop: 'clamp(1rem, 3vw, 5rem)',
              marginBottom: 'clamp(0.75rem, 2vw, 4rem)',
              lineHeight: 1.2,
            }}
          >
            Powering the Future of
            <br />
            Space Communications
          </Typography>
        </Parallax>
        <Parallax speed={-0.25}>
  <Typography
    variant="h4"
    className="proportional-small"
    sx={{
      // --- FIX: Add a responsive font size ---
      fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',

      fontFamily: 'Rubik',
      fontWeight: 400,
      color: '#010532',
      maxWidth: 'clamp(250px, 60vw, 1000px)',
      mx: 'auto',
      lineHeight: 1.6,
      opacity: 0.8,
    }}
  >
    The Space Communications Revolution Starts Here. We're building the network
    infrastructure backbone for the new space economy.
  </Typography>
</Parallax>
      </Box>

      {/* --- Scroll Indicator (Fixed for proportional scaling) --- */}
      <Box
        sx={{

          position: 'absolute',
          bottom: { xs: '2rem', sm: '3rem' }, // Mobile-friendly bottom spacing
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          color: "#010532",
          opacity: 0.8,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: '0.75rem', sm: '1rem' }, // Mobile-friendly gap
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: { xs: '0.875rem', sm: '1rem' }, // Mobile-friendly font size
            fontWeight: 500,
            margin: 0,
          }}
        >
          Scroll to explore
        </Typography>
        
        {/* Combined arrow container for better grouping */}
        <Box
          sx={{
            '@keyframes bounce-animation': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
              '40%': { transform: { xs: 'translateY(4px)', sm: 'translateY(6px)' } }, // Mobile-friendly animation
              '60%': { transform: { xs: 'translateY(2px)', sm: 'translateY(3px)' } },
            },
            animation: 'bounce-animation 2.5s infinite',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: '0.25rem', sm: '0.3rem' }, // Mobile-friendly gap
          }}
        >
          {/* Single SVG with both arrows for better grouping */}
          <Box
            component="svg"
            sx={{
              width: { xs: '18px', sm: '22px' }, // Mobile-friendly arrow size
              height: { xs: '24px', sm: '28px' },
            }}
            viewBox="0 0 22 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="arrowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" style={{ stopColor: "#4C3B93" }} />
                <stop offset="100%" style={{ stopColor: "#286BDC" }} />
              </linearGradient>
            </defs>
            {/* First arrow */}
            <polyline 
              points="6 6 11 11 16 6" 
              stroke="url(#arrowGradient)" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            {/* Second arrow, positioned below */}
            <polyline 
              points="6 18 11 23 16 18" 
              stroke="url(#arrowGradient)" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedHeader;
