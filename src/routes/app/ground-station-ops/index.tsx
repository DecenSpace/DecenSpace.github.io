import Typography from "@mui/material/Typography";
import AppLayout from "../components/AppLayout";

const GroundStationOps: React.FC = () => (
    <AppLayout sidebar={null}>
        <Typography variant="h2" marginBottom={3}>
            Ground Station Operators
        </Typography>
        <Typography variant="h3" marginBottom={3}>
            App
        </Typography>
        <Typography variant="h4" marginBottom={3}>
            Coming soon
        </Typography>
    </AppLayout>
);

export default GroundStationOps;