import SvgIcon from "./SvgIcon";
import SvgArrowRight from "icons/ArrowRight";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, SxProps } from "@mui/material/styles";

// Remove fixed size - will use proportional sizing

const OuterCircle = styled("a")(({ theme }) => ({
  // Define button dimensions with CSS custom properties for proportional scaling
  // Wider ranges to handle extreme zoom levels better
  '--button-height': 'clamp(60px, 15vw, 200px)',
  '--button-width': 'clamp(220px, 30vw, 480px)',
  '--button-radius': 'clamp(30px, 7.5vw, 100px)',
  '--button-padding': 'clamp(12px, 2.5vw, 30px)',
  '--button-gap': 'clamp(8px, 2vw, 25px)',
  
  height: 'var(--button-height)',
  width: 'var(--button-width)',
  borderRadius: 'var(--button-radius)',
  padding: 'var(--button-padding) clamp(20px, 3vw, 30px) var(--button-padding) calc(var(--button-height) + var(--button-gap))',
  gap: 'var(--button-gap)',
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
  // Geometry: Inner circle inherits dimensions from outer button for perfect scaling
  height: 'var(--button-height)', // Inherit exact outer height
  width: 'var(--button-height)', // Use height for perfect circle (not width)
  borderRadius: 'var(--button-radius)', // Inherit outer radius
  padding: 'calc(var(--button-padding) * 0.8)', // Slightly less padding for better text fit
  position: "absolute",
  top: '50%', // Center vertically
  left: '-1px', // Tiny nudge to the left for perfect alignment
  transform: 'translateY(-50%)', // Center vertically using transform
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center", // Center content vertically
  textAlign: "left",
  gap: 'calc(var(--button-padding) * 0.3)', // Add gap between number and label

  // Glassmorphism styles
  backgroundColor: "rgba(245, 245, 245, 0.25)", // Semi-transparent background
  backdropFilter: "blur(12px) saturate(180%)",
  WebkitBackdropFilter: "blur(12px) saturate(180%)", // For Safari support
  // Remove inner border to prevent double-border effect
  border: "none",
  color: "#F5F5F5", // Kept your original text color
  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
}));

const Number = styled("span")({
  fontFamily: "Satoshi",
  fontSize: 'calc(var(--button-height) * 0.28)', // Slightly larger for better readability
  fontWeight: "600", // Make number bolder
  lineHeight: "1",
  display: "block", // Block for better spacing
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
      <Typography 
        variant="body1" 
        sx={{ 
          margin: 0, 
          color: "#F5F5F5", 
          fontSize: 'calc(var(--button-height) * 0.13)',
          fontWeight: "400",
          lineHeight: "1.2",
          letterSpacing: "0.02em"
        }}
      >
        {label}
      </Typography>
    </InnerCircle>
    {/* "Get in touch with us" text centered in the available space to the right of inner circle */}
    <Typography 
      variant="body2" 
      sx={{ 
        position: "absolute",
        top: '50%',
        left: 'calc(var(--button-height) + var(--button-gap) + (var(--button-width) - var(--button-height) - var(--button-gap)) / 2)', // Center in remaining space
        transform: 'translate(-50%, -50%)',
        color: "#F5F5F5", 
        fontSize: 'calc(var(--button-height) * 0.12)',
        fontWeight: "400",
        lineHeight: "1.2",
        letterSpacing: "0.01em",
        textAlign: "center",
        whiteSpace: "nowrap",
        zIndex: 0, // Behind the inner circle
      }}
    >
      {linkLabel}
    </Typography>
    
    {/* Arrow at the bottom right */}
    <SvgIcon 
      component={SvgArrowRight} 
      sx={{ 
        position: "absolute",
        bottom: 'calc(var(--button-padding) * 0.8)',
        right: 'calc(var(--button-padding) * 1.2)', // Position from the right edge
        color: "#F5F5F5", 
        height: 'calc(var(--button-height) * 0.18)',
        width: 'calc(var(--button-height) * 0.18)',
        zIndex: 1, // Above other elements
      }} 
    />
  </OuterCircle>
);

export default EnumerationItem;
