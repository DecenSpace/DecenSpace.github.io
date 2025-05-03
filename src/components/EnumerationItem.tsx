import SvgArrowRight from "icons/ArrowRight";
import Typography from "@mui/material/Typography";
import { styled, SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Link, LinkProps } from "react-router-dom";

const size = 22;

const OuterCircle = styled(Link)(({ theme }) => ({
    height: theme.spacing(size),
    width: theme.spacing(size + 20),
    borderRadius: theme.spacing(size / 2),
    padding: theme.spacing(5, 4, 5, size + 4),
    gap: theme.spacing(3),
    backgroundColor: theme.palette.primaryColor[800],
    color: theme.palette.text.primary,
    position: "relative",
    border: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left",
    transition: "background-color 0.2s, transform 1s",
    cursor: "pointer",
    textDecoration: "none",
    ":hover": {
        backgroundColor: theme.palette.primaryColor[700],
        transform: "translateX(8px)"
    }
}));

const InnerCircle = styled("div")(({ theme }) => ({
    height: theme.spacing(size),
    width: theme.spacing(size),
    borderRadius: theme.spacing(size / 2),
    padding: theme.spacing(5),
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left"
}));

const Number = styled("span")({
    fontFamily: "'MajorMonoDisplay Numbers', sans-serif",
    fontSize: 44,
    lineHeight: "1.2",
    display: "inline-block",
    marginLeft: "-0.12em"
});

interface IEnumerationItemProps extends LinkProps {
    num: number;
    label: string;
    linkLabel: string;
    children?: never;
    sx?: SxProps;
}

const EnumerationItem: React.FC<IEnumerationItemProps> = ({ num, label, linkLabel, ...props }) => (
    <OuterCircle {...props}>
        <InnerCircle>
            <Number>{num < 10 ? "0": ""}{num}</Number>
            <Typography variant="body1" sx={{ margin: 0 }}>{label}</Typography>
        </InnerCircle>
        <Box component={SvgArrowRight} height={24} />
        {linkLabel}
    </OuterCircle>
);

export default EnumerationItem;