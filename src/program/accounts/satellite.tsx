import { BN, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { SatelliteMint } from "program/satellite-mint-program";
import { SATELLITE_SEEDS } from "program/utils/Seeds";
import adminPubkey from "routes/app/admin/utils/adminPubkey";

const admin = adminPubkey;

export async function getSatelliteData(
    satelliteOperatorPubkey: PublicKey,
    program: Program<SatelliteMint>,
    satelliteNoradId: BN
) {
    // get satellite pda
    let [satellitePda] = PublicKey.findProgramAddressSync(
        [
            SATELLITE_SEEDS,
            satelliteOperatorPubkey.toBuffer(),
            admin.toBuffer(),
            satelliteNoradId.toArrayLike(Buffer, "le", 8),
        ],
        program.programId
    );

    const {
        owner,
        name,
        country,
        noradId,
        launchDate,
        orbitType,
        inclination,
        altitude,
        maneuverType,
        operationStatus,
    } = await program.account.satellite.fetch(satellitePda);

    return {
        owner,
        name,
        country,
        noradId,
        launchDate,
        orbitType,
        inclination,
        altitude,
        maneuverType,
        operationStatus,
    };
}
