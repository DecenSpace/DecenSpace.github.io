import type React from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import AppContentGrid from "routes/app/components/AppContentGrid";
import Box from "@mui/material/Box";
import TextFieldControl from "routes/app/components/form-controls/TextFieldControl";
import Stack from "@mui/material/Stack";
import SelectControl from "routes/app/components/form-controls/SelectControl";
import { OperationStatus } from "program/types/OperationStatus";
import Typography from "@mui/material/Typography";
import {
    FrequencyType,
    getFrequencyTypeText,
} from "program/types/FrequencyType";

export interface IStationFormValues {
    stationId: number;
    name: string;
    longitude: number;
    latitude: number;
    cost_per_mb: number;
    frequencyType: FrequencyType;
    operationStatus: OperationStatus;
}

interface IStationRegistrationFormProps {
    defaultValues: Partial<IStationFormValues>;
    onSubmit: (values: IStationFormValues) => void;
}

const StationRegistrationForm: React.FC<IStationRegistrationFormProps> = ({
    defaultValues,
    onSubmit,
}) => {
    const { handleSubmit, formState, control } = useForm<IStationFormValues>({
        defaultValues,
        mode: "onChange",
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <AppContentGrid>
                <Stack direction="column" spacing={3}>
                    <Typography variant="h4" marginBottom={1}>
                        Basic Information
                    </Typography>
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
                        label="Station name"
                        variant="filled"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "stationId",
                            rules: {
                                required: true,
                                min: 1,
                            },
                        }}
                        fullWidth
                        label="Station ID"
                        variant="filled"
                        type="number"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "longitude",
                            rules: {
                                required: true,
                                min: -180,
                                max: 180,
                            },
                        }}
                        fullWidth
                        label="Location longitude"
                        variant="filled"
                        type="number"
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "latitude",
                            rules: {
                                required: true,
                                min: -180,
                                max: 180,
                            },
                        }}
                        fullWidth
                        label="Location latitude"
                        variant="filled"
                        type="number"
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
                    <Typography variant="h4" marginBottom={1}>
                        Antenna Information
                    </Typography>
                    <SelectControl
                        controller={{
                            control,
                            name: "frequencyType",
                            rules: { required: true },
                        }}
                        label="Frequency type"
                        variant="filled"
                        options={(
                            [
                                "uhf",
                                "vhf",
                                "sband",
                                "kband",
                                "kuBand",
                                "kaBand",
                            ] satisfies FrequencyType[]
                        ).map(
                            (type) =>
                            ({
                                label: getFrequencyTypeText(type),
                                value: type,
                            } satisfies {
                                label: string;
                                value: FrequencyType;
                            })
                        )}
                        fullWidth
                    />
                    <TextFieldControl
                        controller={{
                            control,
                            name: "cost_per_mb",
                            rules: {
                                required: true,
                                min: 0.01,
                            },
                        }}
                        fullWidth
                        label="Cost per MB"
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
                        Register Station
                    </Button>
                </Box>
            </AppContentGrid>
        </form>
    );
};

export default StationRegistrationForm;
