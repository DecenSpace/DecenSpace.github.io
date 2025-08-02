import Box from "@mui/material/Box";
import { Parallax } from "react-scroll-parallax";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ParallaxImage = ({ imageUrl, speed }: {
    imageUrl: string;
    speed: number;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  if (isMobile) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "400px", // Increased mobile height to prevent gaps
          position: "relative",
          overflow: "hidden",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <Parallax speed={speed * 0.5}> {/* Reduced speed for mobile */}
          <Box
            component="img"
            src={imageUrl}
            alt="Ground station dish"
            sx={{
              width: "100%",
              height: "150%", // Smaller height for mobile
              objectFit: "cover",
              objectPosition: "center",
              transform: "translateY(-20%)",
            }}
          />
        </Parallax>
        {/* Subtle overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(245, 245, 245, 0.05) 0%, rgba(219, 229, 255, 0.02) 100%)",
            zIndex: 1,
          }}
        />
      </Box>
    );
  }

  if (isTablet) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "450px", // Specific tablet height to prevent gaps
          position: "relative",
          overflow: "hidden",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <Parallax speed={speed * 0.7}> {/* Slightly reduced speed for tablet */}
          <Box
            component="img"
            src={imageUrl}
            alt="Ground station dish"
            sx={{
              width: "100%",
              height: "170%", // Medium height for tablet
              objectFit: "cover",
              objectPosition: "center",
              transform: "translateY(-25%)",
            }}
          />
        </Parallax>
        {/* Subtle overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(245, 245, 245, 0.05) 0%, rgba(219, 229, 255, 0.02) 100%)",
            zIndex: 1,
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "50vh",
        position: "relative",
        overflow: "hidden",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <Parallax speed={speed}>
        <Box
          component="img"
          src={imageUrl}
          alt="Ground station dish"
          sx={{
            width: "100%",
            height: "200%",
            objectFit: "cover",
            objectPosition: "center",
            transform: "translateY(-33%)",
            minHeight: "clamp(40rem, 100vh, 60rem)",
          }}
        />
      </Parallax>
      {/* Subtle overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(245, 245, 245, 0.05) 0%, rgba(219, 229, 255, 0.02) 100%)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default ParallaxImage;