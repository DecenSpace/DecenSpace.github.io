import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
    selectManeuverTypes,
    selectOperationStatus,
} from "../utils/RegistrationUtils";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { BN } from "bn.js";
import { useSatelliteProgram } from "program/program-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import {
    clusterApiUrl,
    Connection,
    PublicKey,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import { REGISTRY_SEEDS, SATELLITE_SEEDS } from "program/utils/Seeds";
import adminPubkey from "routes/app/admin/utils/adminPubkey";
import { getAdminKeypair } from "routes/app/admin/utils/adminKeypair";
import { getTestKeypair } from "routes/app/admin/utils/testKeypair";

// for debug (in .gitignore)
const adminKeypair = getAdminKeypair();
const testKeypair = getTestKeypair();

// should be read in a better way. (preferrably from the registry account)
const admin = adminPubkey;

const ManeuverType = {
    StationKeeping: { stationKeeping: {} },
    OrbitRaising: { orbitRaising: {} },
    OrbitLowering: { orbitLowering: {} },
    InclinationChange: { inclinationChange: {} },
    PhaseAdjustment: { phaseAdjustment: {} },
    CollisionAvoidance: { collisionAvoidance: {} },
    EndOfLife: { endOfLife: {} },
    Desaturation: { desaturation: {} },
};

const OperationStatus = {
    Active: { active: {} },
    Offline: { offline: {} },
    Maintenance: { maintenance: {} },
};

interface SatelliteFormValues {
    owner: PublicKey;
    name: string;
    country: string;
    noradId: number;
    launchDate: Dayjs | null;
    orbitType: string;
    inclination: number;
    altitude: number;
    maneuverType: string;
    operationStatus: string;
}

const SatelliteRegistrationForm: React.FC = () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = useWallet();
    const [satelliteOwner, setSatelliteOwner] = useState<PublicKey>();
    const [registryPda, setRegistryPda] = useState<PublicKey>();
    const [satellitePda, setSatellitePda] = useState<PublicKey>();
    const { program } = useSatelliteProgram();
    const [formValues, setFormValues] = useState<SatelliteFormValues>({
        owner: wallet.publicKey!,
        name: "",
        country: "",
        noradId: 0,
        launchDate: dayjs(),
        orbitType: "",
        inclination: 0,
        altitude: 0,
        maneuverType: "",
        operationStatus: "",
    });

    // get seeds
    useEffect(() => {
        if (wallet.publicKey) {
            try {
                let [registryPda] = PublicKey.findProgramAddressSync(
                    [REGISTRY_SEEDS, admin.toBuffer()],
                    program.programId
                );
                let [satellitePda] = PublicKey.findProgramAddressSync(
                    [
                        SATELLITE_SEEDS,
                        wallet.publicKey.toBuffer(),
                        admin.toBuffer(),
                    ],
                    program.programId
                );
                setRegistryPda(registryPda);
                setSatelliteOwner(wallet.publicKey);
                setSatellitePda(satellitePda);
            } catch (error) {
                console.error(error);
            }
        }
    }, [program.programId]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleDateChange = (
        field: keyof SatelliteFormValues,
        value: Dayjs | null
    ) => {
        setFormValues({
            ...formValues,
            [field]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // prepare args for tx
        const args = {
            ...formValues,
            owner: new PublicKey(formValues.owner),
            noradId: new BN(formValues.noradId),
            launchDate: new BN(dayjs(formValues.launchDate).unix()),
            maneuverType:
                ManeuverType[
                    formValues.maneuverType as keyof typeof ManeuverType
                ],
            operationStatus:
                OperationStatus[
                    formValues.operationStatus as keyof typeof OperationStatus
                ],
        };

        // build tx instruction
        const txInstruction = await program.methods
            .mintSatellite(args)
            .accounts({
                authority: satelliteOwner,
                registry: registryPda,
                satellite: satellitePda,
                systemProgram: SystemProgram.programId,
            })
            .instruction();

        const { blockhash, lastValidBlockHeight } =
            await connection.getLatestBlockhash();

        // build tx
        const tx = new Transaction({
            feePayer: satelliteOwner,
            blockhash,
            lastValidBlockHeight,
        });

        tx.add(txInstruction);

        // for debug
        // const signature = await sendAndConfirmTransaction(connection, tx, [testKeypair]);

        // get signature
        const signature = await wallet.sendTransaction(tx, connection);
        await connection.confirmTransaction({
            signature,
            blockhash,
            lastValidBlockHeight,
        });
        console.log("satellite tx: ", signature);

        const satellite = await program.account.satellite.fetch(satellitePda!);
        const registry = await program.account.registry.fetch(registryPda!);
        console.log(
            "satellite count in registry: ",
            registry.satelliteCount.toNumber()
        );
        console.log("satellite author: ", satellite.owner.toBase58());
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <TextField
                        fullWidth
                        name="owner"
                        value={wallet.publicKey}
                        label="Owner Pubkey"
                        variant="outlined"
                        disabled
                        helperText="Autofilled from wallet"
                    />
                </Grid>

                <Grid size={3}>
                    <TextField
                        fullWidth
                        name="name"
                        onChange={handleInputChange}
                        label="Name of satellite"
                        variant="outlined"
                    />
                </Grid>

                <Grid size={3}>
                    <TextField
                        fullWidth
                        name="country"
                        onChange={handleInputChange}
                        label="Country"
                        variant="outlined"
                    />
                </Grid>

                <Grid size={4}>
                    <TextField
                        fullWidth
                        name="noradId"
                        onChange={handleInputChange}
                        label="NORAD-ID"
                        variant="outlined"
                    />
                </Grid>

                <Grid size={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{ width: 1 }}
                            label="Launch Date"
                            onChange={(date) =>
                                handleDateChange("launchDate", date)
                            }
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid size={4}>
                    <TextField
                        fullWidth
                        label="Orbit Type"
                        name="orbitType"
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>

                <Grid size={3}>
                    <TextField
                        fullWidth
                        label="Inclination"
                        name="inclination"
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>

                <Grid size={3}>
                    <TextField
                        fullWidth
                        label="Altitude"
                        name="altitude"
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>

                <Grid size={3}>
                    <TextField
                        fullWidth
                        label="Maneuver Type"
                        value={formValues.maneuverType}
                        name="maneuverType"
                        select
                        onChange={handleInputChange}
                        variant="outlined"
                    >
                        {selectManeuverTypes.map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid size={3}>
                    <TextField
                        fullWidth
                        label="Operation Status"
                        value={formValues.operationStatus}
                        name="operationStatus"
                        select
                        onChange={handleInputChange}
                        variant="outlined"
                    >
                        {selectOperationStatus.map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Register Satellite
                </Button>
            </Grid>
        </form>
    );
};

export default SatelliteRegistrationForm;
