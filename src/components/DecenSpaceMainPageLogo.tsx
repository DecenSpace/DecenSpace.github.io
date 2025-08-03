import { autocompleteClasses, Box } from "@mui/material";
import React from "react";
import SvgIcon from "./SvgIcon";
import DecenSpaceLogo from "icons/DecenSpaceLogo";

const DecenSpaceMainPageLogo: React.FC = () => (
  <Box marginBottom={10} position="relative">
    <SvgIcon
      component={DecenSpaceLogo}
      color="text.primary"
      sx={{
        opacity: 0.6,
        position: "absolute",
        left: 0,
        top: 0,
      }}
    />
  </Box>
);

export default DecenSpaceMainPageLogo;
