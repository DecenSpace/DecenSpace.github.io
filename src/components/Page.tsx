import Box from "@mui/material/Box";
import { ParallaxProvider } from "react-scroll-parallax";

const Page = ({ children }: React.PropsWithChildren) => (
  <ParallaxProvider>
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
      {children}
    </Box>
  </ParallaxProvider>
);

export default Page;
