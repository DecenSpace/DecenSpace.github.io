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
    marginTop: theme.spacing(12),
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
    [theme.breakpoints.up("sm")]: {
        marginTop: theme.spacing(6),
        gridTemplateColumns: "repeat(6,  minmax(0, 1fr))",
        gridTemplateAreas: `
            "${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.above} ${GridArea.above}"
            "${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.head} ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.main} ${GridArea.main} ${GridArea.main} . ${GridArea.aside} ${GridArea.aside}"
            "${GridArea.below} ${GridArea.below} ${GridArea.below} . ${GridArea.aside} ${GridArea.aside}"
        `
    }
}));

export default PageGridContainer;