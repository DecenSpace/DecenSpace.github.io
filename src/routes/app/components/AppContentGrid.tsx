import { styled } from "@mui/material/styles";

const AppContentGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gridAutoRows: "auto",
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(2,  minmax(0, 1fr))",
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(3,  minmax(0, 1fr))",
    }
}));

export default AppContentGrid;