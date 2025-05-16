import { BN, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { getGroundStationPda } from "program/pda/groundStationPda";
import { SatelliteMint } from "program/satellite-mint-program";

export async function getGroundStation(
    program: Program<SatelliteMint>,
    groundStationOperatorPubkey: PublicKey,
    groundStationId: BN
) {
    const groundStationPda = await getGroundStationPda(
        program,
        groundStationOperatorPubkey,
        groundStationId
    );

    return program.account.groundStation.fetch(groundStationPda);
}
