import { autocompleteClasses, Box } from "@mui/material";
import React from "react";
import SvgIcon from "./SvgIcon";
import DecenSpaceTitleLogoMainPage from "icons/DecenSpaceMainPageLogo";

const DecenSpaceMainPageLogo: React.FC = () => (
  <Box marginBottom={10} position="relative">
    <SvgIcon
      component={DecenSpaceTitleLogoMainPage}
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
