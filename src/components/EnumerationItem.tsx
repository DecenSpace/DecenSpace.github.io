import SvgIcon from "./SvgIcon";
import SvgArrowRight from "icons/ArrowRight";
import Typography from "@mui/material/Typography";
import { styled, SxProps } from "@mui/material/styles";

const size = 22;

const OuterCircle = styled("a")(({ theme }) => ({
  height: theme.spacing(size),
  width: theme.spacing(size + 20),
  borderRadius: theme.spacing(size / 2),
  padding: theme.spacing(5, 4, 5, size + 4),
  gap: theme.spacing(3),
  background: "linear-gradient(135deg, rgba(1, 5, 50, 0.7) 10%, rgba(40, 107, 220, 0.6) 80%)",
  color: "#F5F5F5",
  position: "relative",
  border: "1px solid rgba(40, 107, 220, 0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  textAlign: "left",
  transition: "all 0.3s ease",
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: "0 4px 16px 0 rgba(1,5,50,0.1)",
  ":hover": {
    background: "linear-gradient(135deg, rgba(1, 5, 50, 0.8) 0%, rgba(40, 107, 220, 0.7) 100%)",
    borderColor: "rgba(1, 1, 1, 0.4)",
    transform: "translateX(4px)",
    boxShadow: "0 6px 24px 0 rgba(40,107,220,0.2)",
  },
}));

const InnerCircle = styled("div")(({ theme }) => ({
  // Original layout properties
  height: theme.spacing(size),
  width: theme.spacing(size),
  borderRadius: theme.spacing(size / 2),
  padding: theme.spacing(5),
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  textAlign: "left",

  // Glassmorphism styles
  backgroundColor: "rgba(245, 245, 245, 0.25)", // Semi-transparent background
  backdropFilter: "blur(12px) saturate(180%)",
  WebkitBackdropFilter: "blur(12px) saturate(180%)", // For Safari support
  border: "1px solid rgba(255, 255, 255, 0.4)",
  color: "#F5F5F5", // Kept your original text color
  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
}));

const Number = styled("span")({
  fontFamily: "Satoshi",
  fontSize: 44,
  lineHeight: "1.2",
  display: "inline-block",
  marginLeft: "-0.12em",
  color: "#F5F5F5",
});

interface IEnumerationItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  num: number;
  label: string;
  linkLabel: string;
  children?: never;
  sx?: SxProps;
}

const EnumerationItem: React.FC<IEnumerationItemProps> = ({
  num,
  label,
  linkLabel,
  ...props
}) => (
  <OuterCircle {...props}>
    <InnerCircle>
      <Number>
        {num < 10 ? "0" : ""}
        {num}
      </Number>
      <Typography variant="body1" sx={{ margin: 0, color: "#F5F5F5", fontSize: "0.875rem" }}>
        {label}
      </Typography>
    </InnerCircle>
    <SvgIcon component={SvgArrowRight} height={20} sx={{ color: "#F5F5F5" }} />
    <Typography variant="body2" sx={{ color: "#F5F5F5", fontSize: "0.875rem" }}>
      {linkLabel}
    </Typography>
  </OuterCircle>
);

export default EnumerationItem;
