import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useWallet } from "@solana/wallet-adapter-react";
import BN from "bn.js";
import DashboardCard from "routes/app/components/DashboardCard";
import DashboardCardButton from "routes/app/components/DashboardCardButton";
import { closeSatelliteTx } from "program/transactions/closeSatelliteTx";
import { closeSatelliteArgs } from "program/instructions/closeSatellite";
import { useSatelliteProgram } from "routes/app";
import CardActions from "@mui/material/CardActions";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";

interface SatelliteDataBoardProps {
    satellite: SatelliteDataValues;
    onSatelliteRemoved: (noradId: BN) => void;
}

const SatelliteDataBoard: React.FC<SatelliteDataBoardProps> = ({
    satellite,
    onSatelliteRemoved,
}) => {

    const program = useSatelliteProgram();
    const wallet = useWallet();

    // prepare tx args
    const args: closeSatelliteArgs = { noradId: satellite.noradId };

    // func to close the satellite
    const closeSatellite = async () => {
        if (wallet.publicKey) {
            await closeSatelliteTx(program, args, wallet.publicKey, wallet);
            onSatelliteRemoved(satellite.noradId);
        }
    };

    return (
        <DashboardCard variant="outlined">
            <CardHeader
                title={satellite.name}
                subheader="Selected satellite"
            />
            <List dense disablePadding>
                <ListItem>
                    <ListItemText
                        primary="NORAD ID"
                        secondary={satellite.noradId.toNumber()}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Inclination"
                        secondary={satellite.inclination}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Semi-Major axis"
                        secondary={satellite.semiMajorAxis}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Eccentricity"
                        secondary={satellite.eccentricity}
                    />
                </ListItem>
            </List>
            <CardActions>
                <DashboardCardButton onClick={closeSatellite}>
                    Remove
                </DashboardCardButton>
            </CardActions>
        </DashboardCard>
    );
};

export default SatelliteDataBoard;
