import Typography from "@mui/material/Typography";
import AppContentGrid from "../components/AppContentGrid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import DashboardCardButton from "../components/DashboardCardButton";
import DashboardCard from "../components/DashboardCard";
import useUsersSatellites from "./satellites/hooks/useUsersSatellites";

const Home: React.FC = () => {

    // This is actually the RAY token address as a placeholder
    const gstTokenAddress = "0x4f3b1a2c5e8f7c6e9a2b3c4e5f6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z0";
    const raydiumTokenSwapUrl = "https://raydium.io/swap?inputCurrency=" + gstTokenAddress;

    const { satellites } = useUsersSatellites();

    const activeCount = satellites.filter((satellite) => !!satellite.operationStatus.active).length;

    return (
        <>
            <Typography variant="h2" marginBottom={3}>
                Satellite Operators
            </Typography>
            <Typography variant="h3" marginBottom={3}>
                Dashboard
            </Typography>
            <AppContentGrid>
                <DashboardCard>
                    <CardHeader title="Fleet" subheader={`${activeCount}/${satellites.length} active`} />
                    <CardContent>
                        <Typography variant="h2">
                            {satellites.length}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <DashboardCardButton component={Link} to="/app/satellite-ops/satellites">
                            View more
                        </DashboardCardButton>
                        <DashboardCardButton component={Link} to="/app/atellite-ops/satellites/register">
                            Register
                        </DashboardCardButton>
                    </CardActions>
                </DashboardCard>
                <DashboardCard>
                    <CardHeader title="Transmissions" subheader="0 scheduled | 0 active" />
                    <CardContent>
                        <Typography variant="h2">
                            0
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <DashboardCardButton component={Link} to="/app/satellite-ops/transmissions">
                            View more
                        </DashboardCardButton>
                    </CardActions>
                </DashboardCard>
                <DashboardCard>
                    <CardHeader title="GST tokens" subheader="0 staked" />
                    <CardContent>
                        <Typography variant="h2">
                            0
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <DashboardCardButton href={raydiumTokenSwapUrl} target="_blank">
                            Buy tokens
                        </DashboardCardButton>
                    </CardActions>
                </DashboardCard>
            </AppContentGrid>
        </>
    );
};

export default Home;