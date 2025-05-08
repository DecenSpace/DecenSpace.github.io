import { Keypair, PublicKey } from "@solana/web3.js";
import { Buffer } from "buffer";

import adminKeypairJson from "./admin-keypair.json";

export function getAdminKey(): Keypair {
  return Keypair.fromSecretKey(Buffer.from(adminKeypairJson));
}
