import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import StationRegistrationForm, {
    IStationFormValues,
} from "./components/StationRegistrationForm";
import { useProgramAddresses } from "routes/app";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router";
import { useShowSnackbar } from "components/SnackbarProvider";
import { sendAndConfirmMintGroundStation } from "program/transactions/mintGroundStation";
import { useSatelliteProgram } from "program/program-data-access";

const RegisterStation: React.FC = () => {
    const { connection } = useConnection();
    const { program } = useSatelliteProgram();
    const walletContext = useWallet();
    const programAddresses = useProgramAddresses();
    const navigate = useNavigate();

    const showSnackbar = useShowSnackbar();

    const handleSubmit = async (formValues: IStationFormValues) => {
        if (
            !programAddresses ||
            !walletContext.wallet ||
            !walletContext.publicKey
        )
            return;

        // build and confirm tx
        const signature = await sendAndConfirmMintGroundStation(
            program,
            formValues,
            walletContext,
            walletContext.publicKey
        );
        console.log("signature: ", signature);
        console.log("Registering ground station", formValues);

        showSnackbar("Ground Station registered");

        // TODO: add select satellite ID
        navigate("/app/ground-station-ops/stations");
    };

    return (
        <Box>
            <Typography variant="h2">Register Ground Station</Typography>
            <Card sx={{ marginTop: 3 }}>
                <CardContent>
                    <StationRegistrationForm
                        defaultValues={{}}
                        onSubmit={handleSubmit}
                    />
                </CardContent>
            </Card>
        </Box>
    );
};

export default RegisterStation;
