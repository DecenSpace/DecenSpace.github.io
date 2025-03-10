import { blend, Box, BoxProps, lighten, styled } from "@mui/system";

const disableGray = "#7782A1";

const ButtonBase = styled(Box)<{ disabled?: boolean }>(({ theme, disabled }) => ({
    fontSize: 16,
    lineHeight: "1.2",
    letterSpacing: "0.04em",
    padding: theme.spacing(2, 4),
    display: "inline-flex",
    borderRadius: 36,
    color: theme.palette.primary.contrastText,
    backgroundColor: disabled ? blend(theme.palette.primary.main, disableGray, 0.5) : theme.palette.primary.main,
    cursor: "pointer",
    transition: "background-color 0.2s",
    border: 0,
    "&:hover": {
        backgroundColor: disabled ?
            blend(theme.palette.primary.main, disableGray, 0.5) :
            lighten(theme.palette.primary.main, 0.1)
    },
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)"
})) as typeof Box;

/**
 * Button component, just like Material UI's Button component, but based directly on @mui/system alone.
 * May remove this and use Material UI's Button component directly if you're using Material UI.
*/
const Button: React.FC<React.HTMLProps<"button"> & BoxProps> = ({ children, ...props }) => (
    <ButtonBase component="button" {...props}>{children}</ButtonBase>
);

export default Button;