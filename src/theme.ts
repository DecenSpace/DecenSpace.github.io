import type { Theme, ThemeOptions } from "@mui/material/styles";
import { blend } from "@mui/system";

const palette: ThemeOptions["palette"] = {
    primary: {
        main: "#164BE4",
        contrastText: "#FFFFFF"
    },
    secondary: {
        main: "#040D28",
        contrastText: "#1FD340"
    },
    text: {
        primary: "#CEDEFF",
        secondary: "#1FD340",
        disabled: "#3964B9"
    },
    divider: "#FFFFFF",
    background: {
        paper: "#001D73",
        default: "#040D28"
    }
};

const typographyBase = {
    fontFamily: "'Anek Latin', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700
};

const spacing = 8;

// Material UI compatible theme
const theme: ThemeOptions = {
    palette,
    typography: {
        ...typographyBase,
        h1: {
            fontFamily: typographyBase.fontFamily,
            fontWeight: typographyBase.fontWeightLight,
            color: palette.text?.primary,
            fontSize: 32,
            lineHeight: "1.2"
        },
        h2: {
            fontFamily: typographyBase.fontFamily,
            fontWeight: typographyBase.fontWeightLight,
            color: palette.text?.secondary,
            fontSize: 26,
            lineHeight: "1.2"
        },
        h3: {
            fontFamily: typographyBase.fontFamily,
            fontWeight: typographyBase.fontWeightRegular,
            color: palette.text?.secondary,
            fontSize: 22,
            lineHeight: "1.2"
        },
        h4: {
            fontFamily: typographyBase.fontFamily,
            fontWeight: typographyBase.fontWeightRegular,
            color: palette.text?.primary,
            fontSize: 16,
            lineHeight: "1.4",
            letterSpacing: "0.02em"
        },
        body1: {
            fontSize: 14,
            lineHeight: "1.6",
            letterSpacing: "0.04em",
            color: palette.text?.primary
        },
        subtitle1: {
            fontSize: 14
        }
    },
    spacing,
    components: {
        MuiContainer: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    paddingLeft: theme.spacing(4),
                    paddingRight: theme.spacing(4),
                    [theme.breakpoints.up("sm")]: {
                        paddingLeft: theme.spacing(6),
                        paddingRight: theme.spacing(6)
                    }
                })
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: 16,
                    lineHeight: "1.2",
                    letterSpacing: "0.04em",
                    padding: theme.spacing(2, 4),
                    display: "inline-flex",
                    borderRadius: 36,
                    color: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.main,
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    border: 0,
                    textTransform: "none"
                }),
                disabled: ({ theme }) => ({
                    backgroundColor: blend(theme.palette.primary.main, theme.palette.grey[400], 0.5)
                })
            }
        }
    }
};

export default theme;