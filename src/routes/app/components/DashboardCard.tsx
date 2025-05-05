import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

/**
 * A Card that will grow with the grid column.
 * Makes the CardActions child component align to the bottom of the card.
 */
const DashboardCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    "& > .MuiCardContent-root": {
        flexGrow: 1
    }
});

export default DashboardCard;