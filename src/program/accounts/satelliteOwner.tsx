import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { getSatelliteOperatorPda } from "program/pda/satelliteOperator";
import { SatelliteMint } from "program/satellite-mint-program";
import { SATELLITE_OPERATOR_SEEDS } from "program/utils/Seeds";

// exports satellite owner data
// used to map satellities registered on the user's pda
export async function getSatelliteOwnerData(
    satelliteOperatorPubkey: PublicKey,
    program: Program<SatelliteMint>
) {
    const satelliteOperatorPda = await getSatelliteOperatorPda(
        program,
        satelliteOperatorPubkey
    );

    const { satellites, owner } = await program.account.satelliteOperator.fetch(
        satelliteOperatorPda
    );

    return { satellites, owner };
}
