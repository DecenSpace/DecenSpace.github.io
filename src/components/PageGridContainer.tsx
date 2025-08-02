import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export enum GridArea {
  above = "above",
  head = "head",
  main = "main",
  aside = "aside",
  below = "below",
}

const PageGridContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  paddingLeft: theme.spacing(12),
  paddingRight: theme.spacing(12),
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto auto auto auto",
  gap: theme.spacing(3),
  gridTemplateAreas: `
        "${GridArea.head}"
        "${GridArea.main}"
        "${GridArea.below}"
        "${GridArea.aside}"
        "${GridArea.above}"
    `,
  backgroundColor: "#F5F5F5",
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: 0,
  },

  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(6),
    gridTemplateColumns: "repeat(6,  minmax(0, 1fr))",
    gridTemplateAreas: `
            "${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head}"
            "${GridArea.main} ${GridArea.main} ${GridArea.main} ${GridArea.main} ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.below} ${GridArea.below} ${GridArea.below} ${GridArea.below} ${GridArea.aside} ${GridArea.aside}"
        `,
  },
}));

export default PageGridContainer;
