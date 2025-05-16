import { BN, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { getSatellitePda } from "program/pda/satellite";
import { SatelliteMint } from "program/satellite-mint-program";

export async function getSatelliteData(
    satelliteOperatorPubkey: PublicKey,
    program: Program<SatelliteMint>,
    satelliteNoradId: BN
) {
    // get satellite pda
    const satellitePda = await getSatellitePda(
        satelliteOperatorPubkey,
        satelliteNoradId,
        program
    );

    const satellite = await program.account.satellite.fetch(satellitePda);

    return satellite;
}
