import {
  clusterApiUrl,
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useSatelliteProgram } from "program/program-data-access";
import { REGISTRY_SEEDS } from "program/utils/Seeds";
import { useEffect, useState } from "react";
import { getAdminKey } from "../utils/utils";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

let registryPda: PublicKey;
const admin = getAdminKey();

const InitializeRegistry: React.FC = () => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const [authority, setAuthority] = useState("");
  const { program } = useSatelliteProgram();

  // get the registry pda
  useEffect(() => {
    try {
      [registryPda] = PublicKey.findProgramAddressSync(
        [REGISTRY_SEEDS, admin.publicKey.toBuffer()],
        program.programId
      );
    } catch (error) {
      console.error(error);
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
    const ix = await program.methods
      .initializeRegistry(args)
      .accounts({
        authority: admin.publicKey,
        registry: registryPda,
        systemProgram: SystemProgram.programId,
      })
      .instruction();

    console.log(ix);
    const tx = new Transaction().add(ix);
    const txID = await sendAndConfirmTransaction(connection, tx, [admin]);
    console.log("tx: ", txID);
  };

  return (
    <>
      <Typography variant="h3" marginBottom={3}>
        Initialize Registry
      </Typography>
      <form onSubmit={handleSubmit}>
        <Card sx={{ marginTop: 3 }}>
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
