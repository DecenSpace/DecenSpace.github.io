import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { SatelliteMint } from "program/satellite-mint-program";
import { SATELLITE_OPERATOR_SEEDS } from "program/utils/Seeds";

// exports satellite owner data
// used to map satellities registered on the user's pda
export async function getSatelliteOwnerData(
    satelliteOperatorPubkey: PublicKey,
    program: Program<SatelliteMint>
) {
    // get satellite owner account pda
    let [satelliteOperatorPda] = PublicKey.findProgramAddressSync(
        [SATELLITE_OPERATOR_SEEDS, satelliteOperatorPubkey!.toBuffer()],
        program.programId
    );

    const { satellites, owner } = await program.account.satelliteOperator.fetch(
        satelliteOperatorPda
    );

    return { satellites, owner };
}
