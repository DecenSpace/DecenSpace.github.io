import StartPageButton from "components/StartPageButton";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";

const CtaButton = () => (
  <Box
    sx={{
      position: "absolute",
      top: "1.5em",
      right: "1.5em",
      zIndex: 1000,
    }}
  >
    <StartPageButton
      component="a"
      href="mailto:info@decenspace.com"
      sx={{
        // --- KEY CHANGE: Remove all padding from the button itself ---
        padding: 0,

        // Set the base font size for the button
        fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",

        // Use a large border-radius for a guaranteed "pill" shape
        borderRadius: "999px",

        // Keep other necessary container styles
        display: "inline-flex",
        textDecoration: "none",
        overflow: "hidden", // Important when removing padding
        background:
          "linear-gradient(135deg, rgba(1, 5, 50, 0.7) 0%, rgba(40, 107, 220, 0.6) 100%)",
        color: "#F5F5F5",
        boxShadow: "0 2px 12px 0 rgba(1,5,50,0.08)",
        fontFamily: "Satoshi",
        fontWeight: 500,
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        "&:hover": {
          background:
            "linear-gradient(135deg, rgba(1, 5, 50, 0.8) 0%, rgba(40, 107, 220, 0.7) 100%)",
          boxShadow: "0 4px 20px 0 rgba(40,107,220,0.15)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* This span is the inner wrapper. It holds the content and padding. */}
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // --- Apply the scalable padding HERE instead of the button ---
          padding: "0.75em 1.5em",
        }}
      >
        <EmailIcon sx={{ fontSize: "1.2em", mr: "0.6em" }} />
        Contact us
      </Box>
    </StartPageButton>
  </Box>
);

export default CtaButton;
