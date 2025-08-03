import { autocompleteClasses, Box } from "@mui/material";
import React from "react";
import SvgIcon from "./SvgIcon";
import SvgDecenspacelogo from "icons/Decenspacelogo";

const DecenSpaceMainPageLogo: React.FC = () => (
  <Box marginBottom={10} position="relative">
    <SvgIcon
      component={SvgDecenspacelogo}
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
