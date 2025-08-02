import SvgIcon from "./SvgIcon";
import SvgArrowRight from "icons/ArrowRight";
import Typography from "@mui/material/Typography";
import { styled, SxProps } from "@mui/material/styles";

// Remove fixed size - will use proportional sizing

const OuterCircle = styled("a")(({ theme }) => ({
  height: 'clamp(60px, 15vw, 250px)', // Better height scaling
  width: 'clamp(120px, 30vw, 500px)', // Better width scaling
  borderRadius: 'clamp(30px, 7.5vw, 125px)', // Proportional border radius
  padding: 'clamp(10px, 3vw, 50px) clamp(8px, 2.5vw, 40px) clamp(10px, 3vw, 50px) clamp(70px, 18vw, 300px)', // Better padding
  gap: 'clamp(8px, 2vw, 40px)', // Better gap
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
  // Proportional layout properties
  height: 'clamp(60px, 15vw, 250px)', // Better height scaling
  width: 'clamp(60px, 15vw, 250px)', // Better width scaling
  borderRadius: 'clamp(30px, 7.5vw, 125px)', // Proportional border radius
  padding: 'clamp(10px, 3vw, 50px)', // Better padding
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
  fontSize: 'clamp(18px, 3vw, 80px)', // Better font scaling
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
      <Typography variant="body1" sx={{ margin: 0, color: "#F5F5F5", fontSize: 'clamp(8px, 0.8vw, 24px)' }}>
        {label}
      </Typography>
    </InnerCircle>
    <SvgIcon component={SvgArrowRight} sx={{ color: "#F5F5F5", height: 'clamp(10px, 1.5vw, 35px)', width: 'clamp(10px, 1.5vw, 35px)' }} />
    <Typography variant="body2" sx={{ color: "#F5F5F5", fontSize: 'clamp(8px, 0.8vw, 24px)' }}>
      {linkLabel}
    </Typography>
  </OuterCircle>
);

export default EnumerationItem;
