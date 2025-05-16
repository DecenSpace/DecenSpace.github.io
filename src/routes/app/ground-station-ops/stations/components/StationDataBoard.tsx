import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useWallet } from "@solana/wallet-adapter-react";
import BN from "bn.js";
import DashboardCard from "routes/app/components/DashboardCard";
import DashboardCardButton from "routes/app/components/DashboardCardButton";
import CardActions from "@mui/material/CardActions";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";
import { getFrequencyTypeText } from "program/types/FrequencyType";
import { parseOperationStatus } from "program/types/OperationStatus";

const priceFormatter = new Intl.NumberFormat(undefined, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

interface StationDataBoardProps {
    station: GroundStationDataValue;
    onStationRemoved: (stationId: BN) => void;
}

const StationDataBoard: React.FC<StationDataBoardProps> = ({
    station,
    onStationRemoved,
}) => {
    const wallet = useWallet();

    // func to close the station
    const closeStation = async () => {
        if (wallet.publicKey) {
            // TODO: await closeStationTX(program, args, wallet.publicKey, wallet);
            onStationRemoved(station.stationId);
        }
    };

    return (
        <DashboardCard variant="outlined" sx={{ overflowY: "auto" }}>
            <CardHeader title={station.name} subheader="Selected station" />
            <List dense disablePadding>
                <ListItem>
                    <ListItemText
                        primary="Station ID"
                        secondary={station.stationId.toString()}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Frequency"
                        secondary={getFrequencyTypeText(station.frequencyType)}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Cost per MB"
                        secondary={priceFormatter.format(station.costPerMb)}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Operation Status"
                        secondary={parseOperationStatus(
                            station.operationStatus
                        )}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Location"
                        secondary={
                            <span>
                                Lat: {station.latitude.toFixed(8)}
                                <br />
                                Lon: {station.longitude.toFixed(8)}
                            </span>
                        }
                    />
                </ListItem>
            </List>
            <CardActions>
                <DashboardCardButton onClick={closeStation}>
                    Remove
                </DashboardCardButton>
            </CardActions>
        </DashboardCard>
    );
};

export default StationDataBoard;
