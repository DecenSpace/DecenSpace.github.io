"use client";

import Typography from "@mui/material/Typography";
import AppLayout from "../components/AppLayout";
import InitializeRegistry from "./components/InitializeRegistry";
import CloseRegistry from "./components/CloseRegistry";

const Admin: React.FC = () => {
  return (
    <AppLayout sidebar={null}>
      <Typography variant="h2" marginBottom={3}>
        ADMIN CONTROLS
      </Typography>
      <InitializeRegistry />
      <CloseRegistry />
    </AppLayout>
  );
};

export default Admin;
