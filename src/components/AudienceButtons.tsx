import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import EnumerationItem from "./EnumerationItem";
import { useParallax } from "react-scroll-parallax";

const AudienceButtons: React.FC = () => {

    const { ref } = useParallax({ rootMargin: { top: -200, bottom: -400, left: 0, right: 0 }, onProgressChange: p => {
        if (ref.current) {
            ref.current.scrollTo({ left: ref.current.scrollWidth * p });
        }
    } });

    return (
        <Box
            marginTop={14}
            marginX={{ xs: -4, sm: 0 }}
            overflow={{ xs: "auto", sm: "visible" }}
            width="100vw"
            ref={ref}
        >
            <Stack
                gap={8}
                direction={{ xs: "row", sm: "column" }}
                marginLeft={{ xs: 4, sm: 0 }}
            >
                <EnumerationItem
                    num={1}
                    label="Satellite operators"
                    linkLabel="get in touch with us"
                    sx={{ flexShrink: 0 }}
                />
                <EnumerationItem
                    num={2}
                    label="Ground station operators"
                    linkLabel="get in touch with us"
                    sx={{ flexShrink: 0 }}
                />
            </Stack>
        </Box>
    );
};

export default AudienceButtons;