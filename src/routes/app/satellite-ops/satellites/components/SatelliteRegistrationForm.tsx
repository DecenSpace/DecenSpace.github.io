import type React from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import AppContentGrid from "routes/app/components/AppContentGrid";
import Box from "@mui/material/Box";
import TextFieldControl from "routes/app/components/form-controls/TextFieldControl";
import Stack from "@mui/material/Stack";
import SelectControl from "routes/app/components/form-controls/SelectControl";
import countries from "utils/countries";
import { ManeuverType } from "program/types/ManeuverType";
import { OperationStatus } from "program/types/OperationStatus";

export interface ISatelliteFormValues {
    // owner: PublicKey;
    name: string;
    country: string;
    noradId: number;
    launchDate: Date;
    // orbitType: string;
    inclination: number;
    altitude: number;
    semiMajorAxis: number;
    eccentricity: number;
    raan: number;
    argOfPeriapsis: number;
    maneuverType: ManeuverType;
    operationStatus: OperationStatus;
}

interface ISatelliteRegistrationFormProps {
    defaultValues: Partial<ISatelliteFormValues>;
    onSubmit: (values: ISatelliteFormValues) => void;
}

const SatelliteRegistrationForm: React.FC<ISatelliteRegistrationFormProps> = ({
    defaultValues,
    onSubmit,
}) => {
    const { handleSubmit, formState, control } = useForm<ISatelliteFormValues>({
        defaultValues,
        mode: "onChange",
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <AppContentGrid>
                <Stack direction="column" spacing={3}>
                    <TextFieldControl
                        controller={{
                            control,
                            name: "name",
                            rules: {
                                required: true,
                                minLength: 2,
                                maxLength: 30,
                            },
                        }}
                        fullWidth
                        label="Name of satellite"
                        variant="filled"
                    />
                    <SelectControl
                        controller={{
                            control,
                            name: "country",
                            rules: { required: true },
                        }}
                        label="Country"
                        variant="filled"
                        options={countries.map(([code, name]) => ({
                            label: name,
                            value: code,
                        }))}
                        selectProps={{
                            MenuProps: {
                                sx: { maxHeight: 600 },
                            },
                        }}
                        fullWidth
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "noradId",
                            rules: {
                                required: true,
                                min: 70000,
                                max: 900000000,
                            },
                        }}
                        fullWidth
                        label="NORAD ID"
                        variant="filled"
                        type="number"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "launchDate",
                            rules: { required: true },
                        }}
                        fullWidth
                        label="Launch Date"
                        variant="filled"
                        type="date"
                        slotProps={{
                            input: {
                                onFocus: (e) =>
                                    (
                                        e.currentTarget as HTMLInputElement
                                    ).showPicker?.(),
                            },
                        }}
                    />
                </Stack>
                <Stack direction="column" spacing={3}>
                    <TextFieldControl
                        controller={{
                            control,
                            name: "inclination",
                            rules: { required: true },
                        }}
                        fullWidth
                        label="Inclination"
                        variant="filled"
                        type="number"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "altitude",
                            rules: { required: true, min: 1000 },
                        }}
                        fullWidth
                        label="Altitude"
                        variant="filled"
                        type="number"
                    />
                    <SelectControl
                        controller={{
                            control,
                            name: "maneuverType",
                            rules: { required: true },
                        }}
                        label="Maneuver Type"
                        variant="filled"
                        options={
                            [
                                {
                                    label: "Station Keeping",
                                    value: "stationKeeping",
                                },
                                {
                                    label: "Orbit Raising",
                                    value: "orbitRaising",
                                },
                                {
                                    label: "Orbit Lowering",
                                    value: "orbitLowering",
                                },
                                {
                                    label: "Inclination Change",
                                    value: "inclinationChange",
                                },
                                {
                                    label: "Phase Adjustment",
                                    value: "phaseAdjustment",
                                },
                                {
                                    label: "Collision Avoidance",
                                    value: "collisionAvoidance",
                                },
                                { label: "End of Life", value: "endOfLife" },
                                {
                                    label: "Desaturation",
                                    value: "desaturation",
                                },
                            ] satisfies { label: string; value: ManeuverType }[]
                        }
                        fullWidth
                    />
                    <SelectControl
                        controller={{
                            control,
                            name: "operationStatus",
                            rules: { required: true },
                        }}
                        label="Operation Status"
                        variant="filled"
                        options={
                            [
                                { label: "Active", value: "active" },
                                { label: "Offline", value: "offline" },
                                { label: "Maintenance", value: "maintenance" },
                            ] satisfies {
                                label: string;
                                value: OperationStatus;
                            }[]
                        }
                        fullWidth
                    />
                </Stack>
                <Stack direction="column" spacing={3}>
                    <TextFieldControl
                        controller={{
                            control,
                            name: "semiMajorAxis",
                            rules: { required: true },
                        }}
                        fullWidth
                        label="Semi-Major Axis"
                        variant="filled"
                        type="number"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "eccentricity",
                            rules: { required: true },
                        }}
                        fullWidth
                        label="Eccentricity"
                        variant="filled"
                        type="number"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "raan",
                            rules: { required: true },
                        }}
                        fullWidth
                        label="RAAN value"
                        variant="filled"
                        type="number"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "argOfPeriapsis",
                            rules: { required: true },
                        }}
                        fullWidth
                        label="Argument of Periapsis"
                        variant="filled"
                        type="number"
                    />
                </Stack>
                <Box gridColumn="1 / -1" marginTop={1}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={!formState.isValid}
                    >
                        Register Satellite
                    </Button>
                </Box>
            </AppContentGrid>
        </form>
    );
};

export default SatelliteRegistrationForm;
