import Box, { BoxProps } from "@mui/material/Box";
import { JSX, SVGProps } from "react";

const SvgIcon: React.FC<{ component: (p: SVGProps<SVGSVGElement>) => JSX.Element } & BoxProps> = ({ component, ...props }) => {
    return <Box component={component} {...props} />;
}

export default SvgIcon;