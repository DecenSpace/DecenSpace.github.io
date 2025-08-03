import Box from "@mui/material/Box";
import EnumerationItem from "components/EnumerationItem";
import Section from "./Section";

const AudienceSection = () => (
  <Section>
    {/* Negative margin to reduce gap - now includes tablet breakpoint */}
    <Box sx={{ marginTop: { xs: "-2rem", sm: "0", md: "-1rem" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "clamp(2rem, 4vw, 5rem)",
          maxWidth: "none",
          width: "clamp(100%, 85vw, 90%)",
          mx: "auto",
        }}
      >
        <EnumerationItem
          num={1}
          label="Satellite operators"
          linkLabel="Get in touch with us"
          href="mailto:satellites@decenspace.com"
          sx={{
            flexShrink: 0,
            fontFamily: "Satoshi",
            flex: 1,
            maxWidth: "clamp(100%, 45vw, 48%)", // Mobile-friendly max width
          }}
        />
        <EnumerationItem
          num={2}
          label="Ground Stations"
          linkLabel="Get in touch with us"
          href="mailto:groundstation@decenspace.com"
          sx={{
            flexShrink: 0,
            fontFamily: "Satoshi",
            flex: 1,
            maxWidth: "clamp(100%, 45vw, 48%)", // Mobile-friendly max width
          }}
        />
      </Box>
    </Box>
  </Section>
);

export default AudienceSection;
