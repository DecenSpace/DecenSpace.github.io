import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export enum GridArea {
    above = "above",
    head = "head",
    main = "main",
    aside = "aside",
    below = "below"
}

const PageGridContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
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
    backgroundImage: [
        "radial-gradient(113% 91% at 17% -2%,rgb(2, 24, 165) 0%,rgba(1, 0, 42, 0) 40%)",
        "radial-gradient(142% 91% at 83% 7%, #02005CFF 0%,rgba(10, 3, 71, 0.64) 89%)",
    ].join(", "),
    minHeight: "calc(100vh - 180px)", // round about the footer height
    [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(6),
        gridTemplateColumns: "repeat(6,  minmax(0, 1fr))",
        gridTemplateAreas: `
            "${GridArea.head} ${GridArea.head} ${GridArea.above} ${GridArea.above} ${GridArea.above} ${GridArea.above}"
            "${GridArea.head} ${GridArea.head} . . ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.main} ${GridArea.main} ${GridArea.main} . ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.below} ${GridArea.below} ${GridArea.below} . ${GridArea.aside} ${GridArea.aside}"
        `
    }
}));

export default PageGridContainer;