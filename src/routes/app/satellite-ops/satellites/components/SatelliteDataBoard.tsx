import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useWallet } from "@solana/wallet-adapter-react";
import BN from "bn.js";
import { getSatelliteData } from "program/accounts/satellite";
import { useEffect, useState } from "react";
import DashboardCard from "routes/app/components/DashboardCard";
import DashboardCardButton from "routes/app/components/DashboardCardButton";
import { closeSatelliteTx } from "program/transactions/closeSatelliteTx";
import { closeSatelliteArgs } from "program/instructions/closeSatellite";
import { useSatelliteProgram } from "routes/app";
import CardActions from "@mui/material/CardActions";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";

interface SatelliteDataBoardProps {
    noradId: BN;
    onSatelliteRemoved: (noradId: BN) => void;
}

const SatelliteDataBoard: React.FC<SatelliteDataBoardProps> = ({ noradId, onSatelliteRemoved }) => {
    const program = useSatelliteProgram();
    const [satelliteData, setSatelliteData] = useState<SatelliteDataValues>();
    const [loading, setLoading] = useState(false);
    const wallet = useWallet();

    // run whenever there is change in norad id
    useEffect(() => {
        const fetchSatelliteData = async () => {

            if (!wallet.publicKey) return;

            try {
                setLoading(true);
                // get the satellite data and store it
                const storeSatelliteData = await getSatelliteData(
                    wallet.publicKey,
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

    // prepare tx args
    const args: closeSatelliteArgs = { noradId };

    // func to close the satellite
    const closeSatellite = async () => {

        if (wallet.publicKey) {
            await closeSatelliteTx(program, args, wallet.publicKey, wallet);
            onSatelliteRemoved(noradId);
        }
    };

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
                                primary="NORAD ID"
                                secondary={satelliteData?.noradId.toNumber()}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Inclination"
                                secondary={satelliteData?.inclination}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Semi-Major axis"
                                secondary={satelliteData?.semiMajorAxis}
                            />
                        </ListItem>
                    </List>
                    <CardActions>
                        <DashboardCardButton onClick={closeSatellite}>
                            Remove
                        </DashboardCardButton>
                    </CardActions>
                </>
            )}
        </DashboardCard>
    );
};

export default SatelliteDataBoard;
