import { Box, Container, Typography } from "@mui/material";

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

export default SponsorsSection;
