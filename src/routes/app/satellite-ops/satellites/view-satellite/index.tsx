import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import ViewSatelliteForm from "../components/ViewSatelliteForm";

const ViewSatellite: React.FC = () => (
    <Box>
        <Typography variant="h2">View Satellite</Typography>
        <Card sx={{ marginTop: 3 }}>
            <CardContent>
                <ViewSatelliteForm />
            </CardContent>
        </Card>
    </Box>
);

export default ViewSatellite;
