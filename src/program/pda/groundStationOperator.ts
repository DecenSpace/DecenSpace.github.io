import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { SatelliteMint } from "program/satellite-mint-program";
import { GROUND_STATION_OPERATOR_SEEDS } from "program/utils/Seeds";

export async function getGroundStationOperatorPda(
    program: Program<SatelliteMint>,
    groundStationOperatorPubkey: PublicKey
) {
    let [groundStationOperatorPda] = PublicKey.findProgramAddressSync(
        [GROUND_STATION_OPERATOR_SEEDS, groundStationOperatorPubkey.toBuffer()],
        program.programId
    );

    return groundStationOperatorPda;
}
