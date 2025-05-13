import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import StationRegistrationForm from "./components/StationRegistrationForm";

const RegisterStation: React.FC = () => (
    <Box>
        <Typography variant="h2">Register Station</Typography>
        <Card sx={{ marginTop: 3 }}>
            <CardContent>
                <StationRegistrationForm />
            </CardContent>
        </Card>
    </Box>
);

export default RegisterStation;
