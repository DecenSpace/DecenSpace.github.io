import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { SatelliteMint } from "program/satellite-mint-program";
import { SATELLITE_OPERATOR_SEEDS } from "program/utils/Seeds";

export async function getSatelliteOperatorPda(
    program: Program<SatelliteMint>,
    satelliteOperatorPubkey: PublicKey
) {
    let [satelliteOperatorPda] = PublicKey.findProgramAddressSync(
        [SATELLITE_OPERATOR_SEEDS, satelliteOperatorPubkey.toBuffer()],
        program.programId
    );

    return satelliteOperatorPda;
}
