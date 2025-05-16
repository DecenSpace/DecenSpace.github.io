import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { getGroundStationOperatorPda } from "program/pda/groundStationOperator";
import { SatelliteMint } from "program/satellite-mint-program";

export async function getGroundStationOwnerData(
    program: Program<SatelliteMint>,
    groundStationOperatorPubkey: PublicKey
) {
    const groundStationOperatorPda = await getGroundStationOperatorPda(
        program,
        groundStationOperatorPubkey
    );

    const groundStationOwner =
        await program.account.groundStationOperator.fetch(
            groundStationOperatorPda
        );

    return groundStationOwner;
}
