import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import SatelliteRegistrationForm from "./components/SatelliteRegistrationForm";

const RegisterSatellite: React.FC = () => (
    <Box>
        <Typography variant="h2">Register Satellite</Typography>
        <Card sx={{ marginTop: 3 }}>
            <CardContent>
                <SatelliteRegistrationForm />
            </CardContent>
        </Card>
    </Box>
);

export default RegisterSatellite;
