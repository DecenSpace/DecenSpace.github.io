"use client";

import * as buffer from "buffer";
import Typography from "@mui/material/Typography";
import AppLayout from "../components/AppLayout";
import InitializeRegistry from "./components/InitializeRegistry";

window.Buffer = buffer.Buffer;

const Admin: React.FC = () => {
  return (
    <AppLayout sidebar={null}>
      <Typography variant="h2" marginBottom={3}>
        ADMIN CONTROLS
      </Typography>
      <InitializeRegistry />
    </AppLayout>
  );
};

export default Admin;
