import * as buffer from "buffer";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { PublicKey } from "@solana/web3.js";
import { useSatelliteProgram } from "program/program-data-access";
import React, { useState } from "react";
import BN, { BN } from "bn.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { SATELLITE_OPERATOR_SEEDS, SATELLITE_SEEDS } from "program/utils/Seeds";
import adminPubkey from "routes/app/admin/utils/adminPubkey";

window.Buffer = buffer.Buffer;
const admin = adminPubkey;

const ViewSatelliteForm: React.FC = ({ }) => {
    const [satelliteNoradId, setSatelliteNoradId] = useState<BN>();
    const { program } = useSatelliteProgram();
    const wallet = useWallet();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setSatelliteNoradId(new BN(e.target.value));
    };

    const handleSatelliteDataFetch = async () => {
        // get satellite pda
        let [satellitePda] = PublicKey.findProgramAddressSync(
            [
                SATELLITE_SEEDS,
                wallet.publicKey!.toBuffer(),
                admin.toBuffer(),
                satelliteNoradId!.toArrayLike(Buffer, "le", 8),
            ],
            program.programId
        );
        let [satelliteOperatorPda] = PublicKey.findProgramAddressSync(
            [SATELLITE_OPERATOR_SEEDS, wallet.publicKey!.toBuffer()],
            program.programId
        );

        const satellite = await program.account.satellite.fetch(satellitePda);
        const satelliteOperator = await program.account.satelliteOperator.fetch(satelliteOperatorPda);
        console.log("satellite operator satellite: ", satelliteOperator.satellites)
        console.log("satellite owner: ", satellite.owner.toBase58());
        console.log("satellite name: ", satellite.name.toString());
    };

    return (
        <Card>
            <CardContent>
                <TextField
                    fullWidth
                    required
                    label="Enter satellite NORAD-ID"
                    onChange={handleInputChange}
                />
            </CardContent>
            <CardContent>
                <Button onClick={handleSatelliteDataFetch} variant="contained">
                    Get data
                </Button>
            </CardContent>
        </Card>
    );
};

export default ViewSatelliteForm;
