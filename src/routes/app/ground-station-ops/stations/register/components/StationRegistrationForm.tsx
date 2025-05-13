import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useWallet } from "@solana/wallet-adapter-react";
import {
    clusterApiUrl,
    Connection,
    PublicKey,
} from "@solana/web3.js";
import adminPubkey from "routes/app/admin/utils/adminPubkey";

interface StationsFormValues {
    // TODO:
}

const StationRegistrationForm: React.FC = () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = useWallet();
    const [stationOwner, setStationOwner] = useState<PublicKey>();
    const [registryPda, setRegistryPda] = useState<PublicKey>();
    const [groundStationsPda, setGroundStationsPda] = useState<PublicKey>();
    // const { program } = useGroundStationsProgram();
    const [formValues, setFormValues] = useState<StationsFormValues>({
    });

    // TODO: get seeds

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: prepare args for tx

        // TODO: build tx instruction

        // TODO: build tx

        // TODO: get signature
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* TODO: add fields */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Register ground station
                </Button>
            </Grid>
        </form>
    );
};

export default StationRegistrationForm;
