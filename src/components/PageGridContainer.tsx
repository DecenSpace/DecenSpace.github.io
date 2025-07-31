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
  backgroundColor: "#DBE5FF", // base bg color
  position: "relative",
  overflow: "hidden",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    zIndex: 0,
    borderRadius: "50%",
    filter: "blur(100px)",
  },

  // top-left blob
  "&::before": {
    width: "1000px",
    height: "800px",
    backgroundColor: "rgba(2, 24, 165, 0.2)",
    top: "-150px",
    left: "-200px",
  },

  // bottom-right blob
  "&::after": {
    width: "900px",
    height: "1000px",
    backgroundColor: "rgba(2, 24, 165, 0.2)",
    bottom: "-250px",
    right: "-200px",
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(6),
    gridTemplateColumns: "repeat(6,  minmax(0, 1fr))",
    gridTemplateAreas: `
            "${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.above} ${GridArea.above}"
            "${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.main} ${GridArea.main} ${GridArea.main} . ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.below} ${GridArea.below} ${GridArea.below} . ${GridArea.aside} ${GridArea.aside}"
        `,
  },
}));

export default PageGridContainer;
