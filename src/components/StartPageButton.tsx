import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StartPageButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
        backgroundColor: theme.palette.primaryColor[600],
    },
})) as typeof Button;

export default StartPageButton;