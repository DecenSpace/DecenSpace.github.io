import {
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import BN from "bn.js";
import { getSatelliteData } from "program/accounts/satellite";
import { useSatelliteProgram } from "program/program-data-access";
import { useEffect, useState } from "react";
import DashboardCard from "routes/app/components/DashboardCard";
import { SatelliteDataValues } from "../utils/satelliteDataValues";

interface SatelliteDataBoardProps {
    noradId: BN;
}

const SatelliteDataBoard: React.FC<SatelliteDataBoardProps> = ({ noradId }) => {
    const { program } = useSatelliteProgram();
    const [satelliteData, setSatelliteData] = useState<SatelliteDataValues>();
    const [loading, setLoading] = useState(false);
    const wallet = useWallet();

    useEffect(() => {
        const fetchSatelliteData = async () => {
            try {
                setLoading(true);
                // get the satellite data and store it
                const storeSatelliteData = await getSatelliteData(
                    wallet.publicKey!,
                    program,
                    noradId
                );
                setSatelliteData(storeSatelliteData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSatelliteData();
    }, [program.programId, wallet.publicKey, noradId]);

    return (
        <DashboardCard variant="outlined">
            {loading ? (
                <CardContent>
                    <div>Loading data</div>
                </CardContent>
            ) : (
                <>
                    <CardHeader
                        title={satelliteData?.name}
                        subheader="Selected satellite"
                    />
                    <List dense disablePadding>
                        <ListItem>
                            <ListItemText
                                primary="Name"
                                secondary={satelliteData?.name}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Added"
                                secondary={satelliteData?.launchDate.toNumber()}
                            />
                        </ListItem>
                    </List>
                </>
            )}
        </DashboardCard>
    );
};

export default SatelliteDataBoard;
