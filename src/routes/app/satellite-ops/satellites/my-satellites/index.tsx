import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import SatelliteList from "../components/SatelliteList";

const MySatellites: React.FC = () => (
    <Box>
        <Typography variant="h2">My Satellites</Typography>
        <Card sx={{ marginTop: 3 }}>
            <CardContent>
                <SatelliteList />
            </CardContent>
        </Card>
    </Box>
);

export default MySatellites;
