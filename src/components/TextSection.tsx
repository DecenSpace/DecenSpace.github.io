import Box from "@mui/system/Box";
import styled from "@mui/system/styled";

const TextSectionBase = styled("section")(({ theme }) => ({
    position: "relative",
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(5)
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
}

const TextSection: React.FC<ITextSectionProps> = ({ heading, children }) => (
    <TextSectionBase>
        <TextSectionHeading>{heading}</TextSectionHeading>
        <Box marginRight={{ xs: 0, sm: "20%" }}>
            {children}
        </Box>
    </TextSectionBase>
);

export default TextSection;