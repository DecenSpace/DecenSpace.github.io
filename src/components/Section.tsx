import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Section = ({ children }: React.PropsWithChildren) => (
  <Box
    sx={{
      width: "100vw",
      paddingY: { xs: 4, sm: 6, md: 4, lg: 8 }, // Reduced tablet (md) padding to eliminate gap
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
    <Container sx={{ position: "relative", zIndex: 1 }}>{children}</Container>
  </Box>
);

export default Section;
