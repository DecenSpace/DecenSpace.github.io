import { darken, type PaletteOptions, type ThemeOptions, type TypographyVariantsOptions } from "@mui/material/styles";
import { ColorPartial } from "@mui/material/styles/createPalette";

const white = "#FFFFFF";

const blue = {
    100: "#B7C0F0",
    200: "#829DEC",
    300: "#5A88F0",
    400: "#366FF1",
    500: "#164BE4",
    600: "#002BAE",
    700: "#001D73",
    800: "#001558",
} satisfies ColorPartial;

const orange = {
    200: "#FFB790",
    300: "#FF945A",
    400: "#F77D44",
    500: "#FF5C15",
    600: "#AF3D16",
    700: "#662A12"
} satisfies ColorPartial;

const green = {
    300: "#C0EBC8",
    400: "#85EC98",
    500: "#1FD340",
    600: "#1B6B29",
    700: "#083711"
} satisfies ColorPartial;

const red = {
    300: "#FAAAAF",
    400: "#EA737A",
    500: "#D2404F",
    600: "#7B1B27",
    700: "#550C18"
} satisfies ColorPartial;

const grey = {
    900: "#15161E",
    800: "#1C1D28",
    700: "#30344C",
    600: "#373D5B",
    500: "#4E557E",
    400: "#697DB5",
    300: "#A2B1D7",
    200: "#B4B6C1",
    100: "#C9CBD6",
    50:  "#EEEFF4"

} satisfies ColorPartial;

export const heroGradient = `linear-gradient(90deg, ${blue[800]} 0%, ${blue[600]} 22%, ${blue[600]} 30%, ${red[500]} 85%, ${orange[400]} 100%)`;

const transparentHighlightOverlay = "rgba(100, 100, 150, 0.2)";
const transparentHighlightOverlay2 = "rgba(100, 100, 150, 0.4)";

const palette: PaletteOptions = {
    mode: "dark",
    primary: {
        light: blue[300],
        main: blue[400],
        dark: blue[500],
        contrastText: white
    },
    secondary: {
        light: orange[400],
        main: orange[500],
        dark: orange[600],
        contrastText: white
    },
    success: {
        light: green[400],
        main: green[500],
        dark: green[600],
        contrastText: white
    },
    warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[600],
        contrastText: white
    },
    error: {
        light: red[400],
        main: red[500],
        dark: red[600],
        contrastText: white
    },
    primaryColor: blue,
    info: blue,
    grey,
    text: {
        primary: white,
        secondary: grey[300],
        disabled: grey[400]
    },
    divider: grey[500],
    background: {
        paper: grey[800],
        default: grey[900]
    }
};

const typographyBase = {
    fontFamily: "'Anek Latin', sans-serif",
    fontSize: 14,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    color: white
};

const typography = {
    ...typographyBase,
    allVariants: {
        letterSpacing: "0.04em",
        color: white
    },
    h1: {
        fontSize: 56,
        fontWeight: typographyBase.fontWeightLight,
        letterSpacing: 0,
    },
    h2: {
        fontSize: 36,
        fontWeight: typographyBase.fontWeightLight,
        letterSpacing: 0,
    },
    h3: {
        fontSize: 28,
        fontWeight: typographyBase.fontWeightLight,
        letterSpacing: "0.02em",
        lineHeight: 1.4,
    },
    h4: {
        fontSize: 18,
        fontWeight: typographyBase.fontWeightLight,
        lineHeight: 1.4,
        letterSpacing: "0.02em",
    },
    h5: {
        fontSize: 16,
        fontWeight: typographyBase.fontWeightBold,
        letterSpacing: "0.04em",
        lineHeight: 1.4,
    },
    h6: {
        fontSize: 16,
    },
    body1: {
        fontSize: typographyBase.fontSize,
        lineHeight: "1.6",
    },
    body2: {
        fontSize: typographyBase.fontSize,
        lineHeight: "1.6",
        color: grey[300]
    },
    button: {
        fontSize: typographyBase.fontSize,
        fontWeight: typographyBase.fontWeightRegular,
        textTransform: "none"
    }
} satisfies TypographyVariantsOptions;

const theme: ThemeOptions = {
    palette,
    typography,
    shape: {
        borderRadius: 10
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: ({ theme }) => ({
                    paddingLeft: theme.spacing(4),
                    paddingRight: theme.spacing(4),
                    [theme.breakpoints.up("sm")]: {
                        paddingLeft: theme.spacing(6),
                        paddingRight: theme.spacing(6)
                    },
                    [theme.breakpoints.up("xl")]: {
                        maxWidth: "1440px"
                    }
                })
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 1
            },
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                },
                outlined: ({ theme }) => ({
                    border: `1px solid ${theme.palette.grey[600]}`,
                    // Use same color for divider as border-color
                    "& > .MuiDivider-root": {
                        borderColor: theme.palette.grey[600]
                    },
                    "& > .MuiCardHeader-root": {
                        backgroundColor: "rgba(200, 200, 255, 0.033)"
                    },
                    "& .MuiTableCell-root": {
                        borderColor: theme.palette.grey[600]
                    },
                    "& .MuiTableCell-head": {
                        backgroundColor: "rgba(200, 200, 255, 0.033)"
                    }
                }),
                elevation0: ({ theme }) => ({
                    boxShadow: "none",
                    background: theme.palette.background.default
                }),
                elevation1: ({ theme }) => ({
                    boxShadow: "none",
                    background: theme.palette.background.paper
                }),
                elevation2: ({ theme }) => ({
                    boxShadow: "none",
                    background: theme.palette.grey[600]
                })
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.MuiButtonBase-root:not(.MuiButton-root):hover": {
                        backgroundColor: transparentHighlightOverlay
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "contained"
            },
            styleOverrides: {
                root:  {
                    lineHeight: "1.5",
                    paddingLeft: "1.75em",
                    paddingRight: "1.75em"
                },
                contained: {
                    backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
                },
                containedSecondary: ({ theme }) => ({
                    backgroundColor: theme.palette.grey[500],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[600]
                    }
                }),
                text: {
                    paddingLeft: "0.75em",
                    paddingRight: "0.75em",
                    "&:hover": {
                        backgroundColor: transparentHighlightOverlay2
                    }
                },
                textPrimary: ({ theme }) => ({
                    color: theme.palette.text.primary
                }),
                textSecondary: ({ theme }) => ({
                    color: theme.palette.text.secondary
                }),
                outlined: {
                    "&:hover": {
                        backgroundColor: transparentHighlightOverlay
                    }
                },
                outlinedPrimary: ({ theme }) => ({
                    color: theme.palette.primary.light,
                    borderColor: theme.palette.primary.light
                }),
                outlinedSecondary: ({ theme }) => ({
                    color: theme.palette.grey[300],
                    borderColor: theme.palette.grey[300]
                }),
            }
        },
        MuiFab: {
            styleOverrides: {
                root: ({ theme }) => ({
                    background: heroGradient,
                    backgroundSize: "200%",
                    backgroundPosition: "70%",
                    color: theme.palette.primary.contrastText,
                    transition: theme.transitions.create("background-position"),
                    "&:hover": {
                        backgroundPosition: "100%"
                    }
                })
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    // Reduce inherent padding
                    "& + .MuiCardContent-root": {
                        paddingTop: 0
                    }
                },
                title: ({ theme }) => ({
                    ...theme.typography.h6,
                    fontWeight: theme.typography.fontWeightRegular
                })
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: ({ theme }) => ({
                    ":last-child": {
                        paddingBottom: theme.spacing(2)
                    }
                })
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                // Default size icons look laughable big in dense lists
                dense: ({ theme }) => ({
                    "& .MuiSvgIcon-root": {
                        fontSize: "1.2em"
                    },
                    "& .MuiListItemIcon-root": {
                        minWidth: theme.spacing(5)
                    }
                })
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    background: "none"
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                // Make line appear behind indicator
                scroller: ({ theme }) => ({
                    borderBottom: "none",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        backgroundColor: theme.palette.divider
                    }
                }),
                indicator: ({ theme }) => ({
                    backgroundColor: theme.palette.text.primary
                })
            }
        },
        MuiTab: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: theme.typography.h4.fontSize,
                    fontWeight: theme.typography.h4.fontWeight,
                    "&.Mui-selected": {
                        color: theme.palette.text.primary
                    }
                })
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: transparentHighlightOverlay
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderColor: theme.palette.grey[600],
                })
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: "inherit"
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "&:not(.Mui-disabled, .Mui-error, .Mui-focused):hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.grey[300]
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderWidth: 1
                    }
                }),
                notchedOutline: ({ theme }) => ({
                    borderColor: theme.palette.grey[400]
                })
            }
        },
        MuiInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "&::before": {
                        borderBottomColor: theme.palette.grey[400]
                    },
                    "&:hover:not(.Mui-disabled, .Mui-error)::before": {
                        borderBottomColor: theme.palette.grey[300]
                    },
                    "&::after, &::before": {
                        borderWidth: "1px !important"
                    }
                })
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 0,
                    "&:not(.Mui-disabled):hover": {
                        backgroundColor:theme.palette.background.default
                    },
                    "&.Mui-focused": {
                        backgroundColor: darken(theme.palette.background.default, 0.1)
                    },
                    "&::before": {
                        borderColor: theme.palette.grey[400]
                    },
                    "&:not(.Mui-disabled, .Mui-error):hover::before": {
                        borderColor: theme.palette.grey[300]
                    },
                    "&::after": {
                        borderWidth: 1
                    }
                })
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    padding: 9
                },
                track: ({ theme }) => ({
                    borderRadius: 18,
                    backgroundColor: theme.palette.grey[400]
                })
            }
        },
        MuiChip: {
            styleOverrides: {
                filled: ({ theme }) => ({
                    "&.MuiChip-colorDefault": {
                        backgroundColor: theme.palette.grey[600]
                    }
                })
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    // Hide line on top of expanded accordions
                    "&.Mui-expanded + .MuiAccordion-root::before": {
                        visibility: "hidden"
                    },
                    // Remove double borders between outlined accordions
                    "&.MuiPaper-outlined::before": {
                        visibility: "hidden"
                    },
                    "&:not(.Mui-expanded) + .MuiAccordion-root:not(.Mui-expanded)": {
                        borderTop: "none"
                    }
                }
            }
        },
        MuiAccordionActions: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(2)
                })
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(2)
                })
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    "&:not(.MuiBackdrop-invisible)": {
                        backdropFilter: "blur(5px)",
                        backgroundColor: transparentHighlightOverlay
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: ({ theme }) => ({
                    backgroundColor: theme.palette.grey[700],
                    // borderRadius: 0,
                    // boxShadow: "none",
                    // "& .MuiListItemButton-root": {
                    //     paddingLeft: theme.spacing(2),
                    //     paddingRight: theme.spacing(2)
                    // }
                })
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText
                })
            }
        },
        MuiAlert: {
            styleOverrides: {
                filledInfo: ({ theme }) => ({
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText
                }),
                filledSuccess: ({ theme }) => ({
                    backgroundColor: theme.palette.success.main,
                    color: theme.palette.success.contrastText
                }),
                filledWarning: ({ theme }) => ({
                    backgroundColor: theme.palette.warning.light,
                    color: theme.palette.warning.contrastText
                }),
                filledError: ({ theme }) => ({
                    backgroundColor: theme.palette.error.main,
                    color: theme.palette.error.contrastText
                }),
                outlined: ({ theme }) => ({
                    color: theme.palette.text.primary
                })
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "always"
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.light,
                    "&:not(.MuiButton-root):hover": {
                        color: theme.palette.primary.main
                    }
                }),
                underlineAlways: ({ theme }) => ({
                    color: "inherit",
                    textDecorationColor: "inherit",
                    "&:not(.MuiButton-root):hover": {
                        color: theme.palette.primary.light
                    }
                })
            }
        },
        MuiListItemText: {
            defaultProps: {
                // Wanted dense lists to have the same colors as normal lists
                slotProps: {
                    primary: {
                        variant: "body1"
                    },
                    secondary: {
                        variant: "body2"
                    }
                }
            }
        }
    }
};

export default theme;