import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import SatelliteRegistrationForm, { ISatelliteFormValues } from "./components/SatelliteRegistrationForm";
import { useProgramAddresses, useSatelliteProgram } from "routes/app";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import { BN } from "bn.js";
import { SATELLITE_SEEDS } from "program/utils/Seeds";
import adminPubkey from "routes/app/admin/utils/adminPubkey";
import { useNavigate } from "react-router";

const RegisterSatellite: React.FC = () => {
    const { connection } = useConnection();
    const walletContext = useWallet();
    const satellitesProgram = useSatelliteProgram();
    const programAddresses = useProgramAddresses();
    const navigate = useNavigate();

    const handleSubmit = async (formValues: ISatelliteFormValues) => {
        if (
            !programAddresses ||
            !walletContext.wallet ||
            !walletContext.publicKey
        )
            return;

        const noradId = new BN(formValues.noradId);

        // get satellite pda
        const [satellitePda] = PublicKey.findProgramAddressSync(
            [
                SATELLITE_SEEDS,
                walletContext.publicKey.toBuffer(),
                adminPubkey.toBuffer(),
                noradId.toArrayLike(Buffer, "le", 8),
            ],
            satellitesProgram.programId
        );

        // build tx instruction
        const txInstruction = await satellitesProgram.methods
            .mintSatellite({
                owner: programAddresses.walletPubkey,
                name: formValues.name,
                orbitType: "",
                country: formValues.country,
                noradId,
                launchDate: new BN(formValues.launchDate.getTime()),
                inclination: formValues.inclination,
                altitude: 7000, // TODO: remove form contract
                semiMajorAxis: formValues.semiMajorAxis,
                eccentricity: formValues.eccentricity,
                raan: formValues.raan,
                argOfPeriapsis: formValues.argOfPeriapsis,
                maneuverType: { [formValues.maneuverType]: {} } as any,
                operationStatus: { [formValues.operationStatus]: {} } as any,
            })
            .accounts({
                authority: programAddresses.walletPubkey,
                registry: programAddresses.registryPda,
                satellite: satellitePda,
                satelliteOperator: programAddresses.satelliteOperatorPda,
                systemProgram: programAddresses.systemPda,
            })
            .instruction();

        const { blockhash, lastValidBlockHeight } =
            await connection.getLatestBlockhash();

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

        // TODO: snackbar message

        // TODO: add select satellite ID
        navigate("/app/satellite-ops/satellites");
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
