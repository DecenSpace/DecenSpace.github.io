import { BN, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { getRegistry } from "program/accounts/registry";
import { SatelliteMint } from "program/satellite-mint-program";
import { GROUND_STATION_SEEDS } from "program/utils/Seeds";

export async function getGroundStationPda(
    program: Program<SatelliteMint>,
    groundStationOperatorPubkey: PublicKey,
    groundStationId: BN
) {
    const registry = await getRegistry(program);

    let [groundStationPda] = PublicKey.findProgramAddressSync(
        [
            GROUND_STATION_SEEDS,
            groundStationOperatorPubkey.toBuffer(),
            registry.authority.toBuffer(),
            groundStationId.toArrayLike(Buffer, "le", 8),
        ],
        program.programId
    );

    return groundStationPda;
}
