import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Parallax } from "react-scroll-parallax";

const AnimatedHeader: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: '95vh', // Header is now slightly shorter
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
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/assets/Close-up-gs-01.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 1,
          }}
        />
      </Parallax>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(245, 245, 245, 0.3) 0%, rgba(219, 229, 255, 0.2) 100%)',
          zIndex: 2,
        }}
      />

      {/* --- Main Content Wrapper --- */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          maxWidth: '1200px',
          mx: 'auto',
          px: 3,
          width: '100%',
          paddingBottom: '6rem', // Added padding to prevent overlap with scroll indicator
        }}
      >
        <Parallax speed={-1}>
          <Box
            component="img"
            src="/assets/icons/decenspacetitle.svg"
            alt="DecenSpace"
            sx={{
              width: { xs: '280px', sm: '350px', md: '400px' },
              height: 'auto',
              marginBottom: 4,
            }}
          />
        </Parallax>
        <Parallax speed={-0.5}>
          <Typography
            variant="h1"
            sx={{
              color: '#010532',
              fontFamily: 'Satoshi',
              fontWeight: 500,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              marginTop: 4,
              marginBottom: 3,
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
            sx={{
              fontFamily: 'Rubik',
              fontWeight: 400,
              color: '#010532',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            The Space Communications Revolution Starts Here. We're building the
            infrastructure backbone for the new space economy.
          </Typography>
        </Parallax>
      </Box>

      {/* --- Scroll Indicator (Updated) --- */}
      <Box
        sx={{
          position: 'absolute', // Positioned absolutely at the bottom of the header
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          color: '#010532',
          opacity: 0.8,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem', fontWeight: 500 }}>
          Scroll to explore
        </Typography>
        
        {/* New animated chevron indicator with gradient */}
        <Box
          sx={{
            '@keyframes bounce-animation': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
              '40%': { transform: 'translateY(6px)' },
              '60%': { transform: 'translateY(3px)' },
            },
            animation: 'bounce-animation 2.5s infinite',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* SVG with a gradient definition */}
          <Box
            component="svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{ marginTop: '-20px' }} >
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#4C3B93' }} />
                <stop offset="100%" style={{ stopColor: '#286BDC' }} />
              </linearGradient>
            </defs>
            <polyline 
              points="6 9 12 15 18 9" 
              stroke="url(#arrowGradient)" 
              strokeWidth="0.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </Box>
          <Box
            component="svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{ marginTop: '-90px' }} // Keep arrows closely stacked
          >
            {/* The same gradient definition is needed here as it's a separate SVG */}
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#4C3B93' }} />
                <stop offset="100%" style={{ stopColor: '#286BDC' }} />
              </linearGradient>
            </defs>
            <polyline 
              points="6 9 12 15 18 9" 
              stroke="url(#arrowGradient)" 
              strokeWidth="0.5" 
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