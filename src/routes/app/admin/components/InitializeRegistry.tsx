import {
    clusterApiUrl,
    Connection,
    PublicKey,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import { useSatelliteProgram } from "program/program-data-access";
import { REGISTRY_SEEDS } from "program/utils/Seeds";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useWallet } from "@solana/wallet-adapter-react";

const InitializeRegistry: React.FC = () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const [authority, setAuthority] = useState("");
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

    // handle authority
    const handleAuthorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthority(e.target.value);
    };

    // build and send the tx
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const args = { authority: new PublicKey(authority) };
        const txInstruction = await program.methods
            .initializeRegistry(args)
            .accounts({
                authority: sender,
                registry: registryPda,
                systemProgram: SystemProgram.programId,
            })
            .instruction();

        const tx = new Transaction().add(txInstruction);
        tx.feePayer = sender;
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        const txID = await wallet.sendTransaction(tx, connection);
        await connection.confirmTransaction(txID);
        console.log("tx: ", txID);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Card sx={{ marginTop: 3 }}>
                    <CardContent>
                        <Typography variant="h3">
                            Initialize registry
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <TextField
                            fullWidth
                            label="registry authority"
                            variant="outlined"
                            onChange={handleAuthorityChange}
                        />
                    </CardContent>
                    <CardContent>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Initialize Registry
                        </Button>
                    </CardContent>
                </Card>
            </form>
        </>
    );
};

export default InitializeRegistry;
