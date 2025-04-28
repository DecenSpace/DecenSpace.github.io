
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Parallax } from "react-scroll-parallax";

const TextSectionBase = styled("section")(({ theme }) => ({
    position: "relative",
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(5)
    },
    "&:before": {
        content: "''",
        display: "block",
        position: "absolute",
        top: -1,
        right: "100%",
        borderTop: "1px solid white",
        height: 0,
        width: 100,
        zIndex: 0,
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
}));

const TextSectionHeading = styled("h1")(({ theme }) => ({
    fontSize: theme.typography?.fontSize,
    fontWeight: theme.typography?.fontWeightRegular,
    lineHeight: "1",
    margin: 0,
    color: theme.palette.text.primary,
    position: "absolute",
    top: theme.spacing(1),
    right: 0,
    "::before": {
        content: "'// '"
    }
}));

interface ITextSectionProps {
    heading: string;
    children: React.ReactNode;
    first?: boolean;
}

const TextSection: React.FC<ITextSectionProps> = ({ heading, children, first }) => (
    <Parallax
        opacity={[0, 1]}
        easing="easeOut"
        translateX={[-20, 0]}
        rootMargin={{ top: 500, bottom: -500, left: 0, right: 0 }}
        disabled={first}
    >
        <TextSectionBase>
            <TextSectionHeading>{heading}</TextSectionHeading>
            <Box marginRight={{ xs: 0, sm: "20%" }}>
                {children}
            </Box>
        </TextSectionBase>
    </Parallax>
);

export default TextSection;