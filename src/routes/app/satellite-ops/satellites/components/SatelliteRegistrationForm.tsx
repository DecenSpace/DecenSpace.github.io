"use client";

import { Button, CardContent, Grid, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { ManeuverTypes, OperationStatus } from "../utils/RegistrationUtils";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface SatelliteFormValues {
  owner: string;
  name: string;
  country: string;
  noradId: string;
  launchDate: Dayjs | null;
  orbitType: string;
  inclination: string;
  altitude: string;
  maneuverType: ManeuverTypes;
  operationStatus: OperationStatus;
}

const SatelliteRegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<SatelliteFormValues>({
    owner: "",
    name: "",
    country: "",
    noradId: "",
    launchDate: null,
    orbitType: "",
    inclination: "",
    altitude: "",
    maneuverType: ManeuverTypes.type1,
    operationStatus: OperationStatus.type1,
  });

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = { ...formValues };
    console.log("satellite data: ", JSON.stringify(res, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* owner */}
        <Grid size={6}>
          <TextField
            fullWidth
            name="owner"
            onChange={handleInputChange}
            label="Owner Pubkey"
            variant="outlined"
          />
        </Grid>

        {/* name */}
        <Grid size={3}>
          <TextField
            fullWidth
            name="name"
            onChange={handleInputChange}
            label="Name of satellite"
            variant="outlined"
          />
        </Grid>

        {/* country */}
        <Grid size={3}>
          <TextField
            fullWidth
            name="country"
            onChange={handleInputChange}
            label="Country"
            variant="outlined"
          />
        </Grid>

        {/* norad ID */}
        <Grid size={4}>
          <TextField
            fullWidth
            name="noradId"
            onChange={handleInputChange}
            label="NORAD-ID"
            variant="outlined"
          />
        </Grid>

        {/* launch date */}
        <Grid size={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: 1 }}
              label="Launch Date"
              onChange={(date) => handleDateChange("launchDate", date)}
            />
          </LocalizationProvider>
        </Grid>

        {/* orbit type */}
        <Grid size={4}>
          <TextField
            fullWidth
            label="Orbit Type"
            name="orbitType"
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>

        {/* inclination */}
        <Grid size={3}>
          <TextField
            fullWidth
            label="Inclination"
            name="inclination"
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>

        {/* altitude */}
        <Grid size={3}>
          <TextField
            fullWidth
            label="Altitude"
            name="altitude"
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>

        {/* altitude */}
        <Grid size={3}>
          <TextField
            fullWidth
            label="Maneuver Type"
            value=""
            name="maneuverType"
            select
            onChange={handleInputChange}
            variant="outlined"
          >
            {Object.values(ManeuverTypes).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* operation status */}
        <Grid size={3}>
          <TextField
            fullWidth
            label="Operation Status"
            value=""
            name="operationStatus"
            select
            onChange={handleInputChange}
            variant="outlined"
          >
            {Object.values(OperationStatus).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Button type="submit" variant="contained" color="primary" size="large">
          Register Satellite
        </Button>
      </Grid>
    </form>
  );
};

export default SatelliteRegistrationForm;
