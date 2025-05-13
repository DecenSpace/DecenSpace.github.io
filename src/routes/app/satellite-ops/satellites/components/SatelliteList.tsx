import * as buffer from "buffer";
import { Card, CardContent, Typography } from "@mui/material";
import { useSatelliteProgram } from "program/program-data-access";
import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getSatelliteOwnerData } from "program/accounts/satelliteOwner";

window.Buffer = buffer.Buffer;

const SatelliteList: React.FC = ({ }) => {
    const [satelliteIds, setSatelliteIds] = useState<string[]>([]);
    const { program } = useSatelliteProgram();
    const wallet = useWallet();

    useEffect(() => {
        const storeSatelliteIds = async () => {
            const { satellites } = await getSatelliteOwnerData(
                wallet.publicKey!,
                program
            );
            setSatelliteIds(satellites.map((id) => id.toString()));
        };

        storeSatelliteIds();
    }, [program.programId, wallet.publicKey]);

    return (
        <Card>
            <CardContent>
                {satelliteIds.map((id, index) => (
                    <Typography variant="h3" key={index}>
                        Satellite NORAD-ID: {id}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
};

export default SatelliteList;
