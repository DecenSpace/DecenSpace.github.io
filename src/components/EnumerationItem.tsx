import { Box, BoxProps, lighten, styled } from "@mui/system";
import Typography from "./Typography";
import SvgIcon from "./SvgIcon";
import SvgArrowRight from "icons/ArrowRight";

const size = 22;

const OuterCircle = styled(Box)(({ theme }) => ({
    height: theme.spacing(size),
    width: theme.spacing(size + 20),
    borderRadius: theme.spacing(size / 2),
    padding: theme.spacing(5, 4, 5, size + 4),
    gap: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    position: "relative",
    border: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "end",
    textAlign: "left",
    transition: "background-color 0.2s, transform 1s",
    cursor: "pointer",
    ":hover": {
        backgroundColor: lighten(theme.palette.background.paper, 0.025),
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
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "end",
    textAlign: "left"
}));

const Number = styled("span")({
    fontFamily: "'MajorMonoDisplay Numbers', sans-serif",
    fontSize: 44,
    lineHeight: "1.5",
    display: "inline-block",
    marginLeft: "-0.12em"
});

interface IEnumerationItemProps extends BoxProps {
    num: number;
    label: string;
    linkLabel: string;
    children?: never;
}

const EnumerationItem: React.FC<IEnumerationItemProps> = ({ num, label, linkLabel, ...props }) => (
    <OuterCircle component="button" {...props}>
        <InnerCircle>
            <Number>{num < 10 ? "0": ""}{num}</Number>
            <Typography variant="body1" sx={{ margin: 0 }}>{label}</Typography>
        </InnerCircle>
        <SvgIcon component={SvgArrowRight} height={24} />
        {linkLabel}
    </OuterCircle>
);

export default EnumerationItem;