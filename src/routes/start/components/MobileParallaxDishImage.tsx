import Box, { type BoxProps } from "@mui/material/Box";
import { useState } from "react";
import { useParallax } from "react-scroll-parallax";

const MobileParallaxDishImage: React.FC<BoxProps> = (props) => {

    const [progress, setProgress] = useState(0);
    const { ref } = useParallax({ onProgressChange: setProgress });

    return (
        <Box
            component="img"
            src="/assets/dish_vertical.jpg"
            alt="placeholder"
            width={theme => `calc(100% + ${theme.spacing(4)})`}
            marginLeft={-4}
            height="60vw"
            display={{ sm: "none" }}
            sx={{ objectFit: "cover" }}
            style={{ objectPosition: `0 -${(progress * 50).toFixed(1)}vw` }}
            ref={ref}
            {...props}
        />
    );
};

export default MobileParallaxDishImage;