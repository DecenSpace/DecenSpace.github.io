import { Box } from "@mui/material";
import SvgDsLogo from "icons/DsLogo";
import React from "react";
import SvgIcon from "./SvgIcon";

const GlowLogo: React.FC = () => (
  <Box marginBottom={5} position="relative">
    <SvgIcon
      component={SvgDsLogo}
      color="text.primary"
      height={128}
      sx={{
        filter: "blur(6px)",
        opacity: 0.6,
        position: "absolute",
        left: 0,
        top: 0,
      }}
    />
    <SvgIcon
      component={SvgDsLogo}
      color="text.primary"
      height={128}
      zIndex={1}
    />
  </Box>
);

export default GlowLogo;
