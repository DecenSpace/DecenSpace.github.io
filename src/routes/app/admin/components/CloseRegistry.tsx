import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
    clusterApiUrl,
    Connection,
    PublicKey,
    Transaction,
} from "@solana/web3.js";
import { useSatelliteProgram } from "program/program-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import { REGISTRY_SEEDS } from "program/utils/Seeds";

const CloseRegistry: React.FC = () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const { program } = useSatelliteProgram();
    const [registryPda, setRegistryPda] = useState<PublicKey>();
    const [sender, setSender] = useState<PublicKey>();
    const wallet = useWallet();

    // get the registry pda
    useEffect(() => {
        if (wallet.publicKey) {
            try {
                let [registryPda] = PublicKey.findProgramAddressSync(
                    [REGISTRY_SEEDS, wallet.publicKey.toBuffer()],
                    program.programId
                );
                setRegistryPda(registryPda);
                setSender(wallet.publicKey);
            } catch (error) {
                console.error(error);
            }
        }
    }, [program.programId]);

    const handleCloseRegistry = async () => {
        const { blockhash, lastValidBlockHeight } =
            await connection.getLatestBlockhash();

        // build the tx
        const tx = new Transaction({
            blockhash,
            lastValidBlockHeight,
            feePayer: sender,
        });

        // build the tx instruction
        const txInstruction = await program.methods
            .closeRegistry()
            .accounts({ authority: sender, registry: registryPda })
            .instruction();

        tx.add(txInstruction);

        // get the signature
        const signature = await wallet.sendTransaction(tx, connection);

        // confirm the signature
        await connection.confirmTransaction({
            signature,
            blockhash,
            lastValidBlockHeight,
        });
        console.log("tx: ", signature);
    };

    return (
        <>
            <Card sx={{ marginTop: 3 }}>
                <CardContent>
                    <Typography variant="h3">Close registry</Typography>
                </CardContent>
                <CardContent>
                    <Button
                        onClick={handleCloseRegistry}
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Close Registry
                    </Button>
                </CardContent>
            </Card>
        </>
    );
};

export default CloseRegistry;
