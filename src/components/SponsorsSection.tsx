import { Box, Container, Typography } from "@mui/material";

const SponsorsSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #F5F5F5 0%, #DBE5FF 100%)',
      paddingY: 'clamp(1.5rem, 6vw, 12rem)',
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
        opacity: 0.03,
        zIndex: 0,
      }
    }}
  >
    <Container sx={{ position: 'relative', zIndex: 1 }}>
      <Typography 
        variant="h3" 
        textAlign="center" 
        className="proportional-medium"
        sx={{
          marginBottom: 'clamp(1rem, 4vw, 8rem)',
          color: '#010532',
          fontFamily: 'Satoshi',
          fontWeight: 500,
          opacity: 0.9,
        }}
      >
        Supported by
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={'clamp(1rem, 4vw, 10rem)'}
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
              height: 'clamp(25px, 4vw, 120px)',
              objectFit: "contain",
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "translateY(-2px)",
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
              height: 'clamp(25px, 4vw, 120px)',
              objectFit: "contain",
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "translateY(-2px)",
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
              height: 'clamp(25px, 4vw, 120px)',
              objectFit: "contain",
              filter: "brightness(0) saturate(100%)",
              opacity: 0.6,
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 0.9,
                transform: "translateY(-2px)",
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
              height: 'clamp(25px, 4vw, 120px)',
              maxWidth: 300,
              objectFit: "contain",
              filter: "brightness(0) saturate(100%)",
              opacity: 0.6,
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 0.9,
                transform: "translateY(-2px)",
              },
            }}
          />
        </a>
      </Box>
    </Container>
  </Box>
);

export default SponsorsSection;
