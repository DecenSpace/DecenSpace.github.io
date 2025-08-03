import { SxProps, Theme } from "@mui/material/styles";

export const gradientText: SxProps<Theme> = {
  background: "linear-gradient(135deg, #121212 0%, #286BDC 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundAttachment: "fixed",
};

export const visuallyHidden: SxProps<Theme> = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
};
