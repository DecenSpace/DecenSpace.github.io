import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { getRegistry } from "program/accounts/registry";
import { SatelliteMint } from "program/satellite-mint-program";
import { SATELLITE_SEEDS } from "program/utils/Seeds";

export async function getSatellitePda(
    satelliteOperatorPubkey: PublicKey,
    satelliteNoradId: BN,
    program: Program<SatelliteMint>
) {
    const registry = await getRegistry(program);

    // get satellite pda
    let [satellitePda] = PublicKey.findProgramAddressSync(
        [
            SATELLITE_SEEDS,
            satelliteOperatorPubkey.toBuffer(),
            registry.authority.toBuffer(),
            satelliteNoradId.toArrayLike(Buffer, "le", 8),
        ],
        program.programId
    );

    return satellitePda;
}
