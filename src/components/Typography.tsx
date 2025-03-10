import { styled, Theme, type Typography } from "@mui/system";
import { SxProps } from "@mui/system/styleFunctionSx";

type TypographyVariants = "h1" | "h2" | "h3" | "h4" | "body1" | "subtitle1" | "span" | "strong";

function getTagName(variant: TypographyVariants) {
    switch (variant) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "strong":
            return variant;
        case "body1":
            return "p";
        default:
            return "span";
    }
}

const TypographyBase = styled("span", { skipVariantsResolver: true })<{ variant: TypographyVariants }>(({ variant, theme }) => ({
    display: ["span", "strong"].includes(getTagName(variant)) ? "inline" : "block",
    marginTop: 0,
    ...((theme.typography && (variant in theme.typography)) ? theme.typography![variant as keyof Typography] as {} : {})
}));

/**
 * Typography component, just like Material UI's Typography component, but based directly on @mui/system alone.
 * May remove this and use Material UI's Typography component directly if you're using Material UI.
*/
const Typography: React.FC<{ variant: TypographyVariants, sx?: SxProps<Theme>, children: React.ReactNode }> = ({ children, ...props }) => (
    <TypographyBase as={getTagName(props.variant)} {...props} >
        {children}
    </TypographyBase>
);

export default Typography;