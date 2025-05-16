import { PublicKey } from "@solana/web3.js";
import { IDL, type SatelliteMint } from "./satellite-mint-program";
import { AnchorProvider, Program } from "@coral-xyz/anchor";

const programId = new PublicKey("FZQmSamSJdtB9JKxbUH82ZdRQ2UcqqBPGbyce2ZdfviN");

export function getSatelliteProgram(provider: AnchorProvider) {
    const program = new Program<SatelliteMint>(IDL, programId, provider);

    return program;
}

export { programId, IDL, SatelliteMint };
