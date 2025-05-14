import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import SatelliteRegistrationForm, { ISatelliteFormValues } from "../components/SatelliteRegistrationForm";
import { useProgramAddresses, useSatelliteProgram } from "routes/app";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { BN } from "bn.js";

const RegisterSatellite: React.FC = () => {

    const { connection } = useConnection();
    const walletContext = useWallet();
    const satellitesProgram = useSatelliteProgram();
    const programAddresses = useProgramAddresses();

    const handleSubmit = async (formValues: ISatelliteFormValues) => {

        // TODO: remove log
        console.log("Form values", formValues);

        if (!programAddresses || !walletContext.wallet) return;

        // build tx instruction
        const txInstruction = await satellitesProgram.methods
            .mintSatellite({
                owner: programAddresses.walletPubkey,
                name: formValues.name,
                orbitType: "",
                country: formValues.country,
                noradId: new BN(formValues.noradId),
                launchDate: new BN(formValues.launchDate.getTime()),
                inclination: formValues.inclination,
                altitude: formValues.altitude,
                maneuverType: { [formValues.maneuverType]: {} } as any,
                operationStatus:  { [formValues.maneuverType]: {} } as any
            })
            .accounts({
                authority: programAddresses.walletPubkey,
                registry: programAddresses.registryPda,
                satellite: programAddresses.satellitePda,
                systemProgram: programAddresses.systemPda,
            })
            .instruction();

        const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();

        // build tx
        const tx = new Transaction({
            feePayer: programAddresses.walletPubkey,
            blockhash,
            lastValidBlockHeight,
        });
        tx.add(txInstruction);

        const signature = await walletContext.sendTransaction(tx, connection);

        await connection.confirmTransaction({
            signature,
            blockhash,
            lastValidBlockHeight,
        });
    };

    return (
        <Box>
            <Typography variant="h2">Register Satellite</Typography>
            <Card sx={{ marginTop: 3 }}>
                <CardContent>
                    <SatelliteRegistrationForm
                        defaultValues={{}}
                        onSubmit={handleSubmit}
                    />
                </CardContent>
            </Card>
        </Box>
    );
};

export default RegisterSatellite;
