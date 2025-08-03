import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InlineIconLink from "components/InlineIconLink";
import X from "@mui/icons-material/X";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Footer = () => (
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
        paddingTop: "clamp(1.5rem, 6vw, 12rem)",
        paddingBottom: "clamp(1.5rem, 6vw, 12rem)",
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
            fontSize: "0.8vw",
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
              fontSize: "clamp(0.6rem, 0.8vw, 1rem)",
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
);

export default Footer;