import { PublicKey } from "@solana/web3.js";
import { IDL, type SatelliteMint } from "./satellite-mint-program";
import { AnchorProvider, Program } from "@coral-xyz/anchor";

const programId = new PublicKey("Ab3hjRZJBWdE6pkv8kLB1ga1hiZQ6dZfQXky9zuPt2Ha");

export function getSatelliteProgram(provider: AnchorProvider) {
  const program = new Program<SatelliteMint>(IDL, programId, provider);

  return program;
}

export { programId, IDL, SatelliteMint };
