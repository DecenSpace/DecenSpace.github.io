import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GridArea } from "routes/start/components/PageGridContainer";
import RolesSelectMenu from "routes/start/components/RolesSelectMenu";
import TitleLogo from "routes/start/components/TitleLogo";
import ConnectWalletTeaser from "../components/ConnectWalletTeaser";

const GroundStationOps: React.FC = () => (
    <>
        <RolesSelectMenu marginBottom={10} marginTop={{ xs: 6, sm: 0 }} />
        <Box component="header" gridArea={GridArea.head} minHeight={360}>
            <TitleLogo />
            <Typography variant="h2" marginBottom={3}>
                Ground Station Operators
            </Typography>
            <Typography variant="h4">
                DecenSpace for ground station operators. A decentralized network of ground stations that provides cost-effective, reliable, and secure satellite communications.
            </Typography>
        </Box>
        <Box gridArea={GridArea.main} marginTop={4}>
            <ConnectWalletTeaser contactLink="mailto:groundstation@decenspace.com" />
        </Box>
    </>
);

export default GroundStationOps;