import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { SatelliteMint } from "program/satellite-mint-program";
import { REGISTRY_SEEDS } from "program/utils/Seeds";
import adminPubkey from "routes/app/admin/utils/adminPubkey";

const admin = adminPubkey;

export async function getRegistryPda(program: Program<SatelliteMint>) {
    let [registryPda] = PublicKey.findProgramAddressSync(
        [REGISTRY_SEEDS, admin.toBuffer()],
        program.programId
    );

    return registryPda;
}
