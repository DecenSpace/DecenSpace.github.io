import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ContentSection = ({ children }: React.PropsWithChildren) => (
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
      <Box sx={{ paddingTop: "6vw", paddingBottom: "6vw" }}>{children}</Box>
    </Container>
  </Box>
);

export default ContentSection;
