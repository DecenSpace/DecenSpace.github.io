import MuiButton, { type ButtonProps } from "@mui/material/Button";

/**
 * Button component, just like Material UI's Button component, but based directly on @mui/system alone.
 * May remove this and use Material UI's Button component directly if you're using Material UI.
*/
const Button: React.FC<React.HTMLProps<"button"> & ButtonProps> = ({ children, ...props }) => (
    <MuiButton {...props}>{children}</MuiButton>
);

export default Button;