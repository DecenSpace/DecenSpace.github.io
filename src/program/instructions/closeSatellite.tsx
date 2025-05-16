import { BN, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { getRegistry } from "program/accounts/registry";
import { getRegistryPda } from "program/pda/registry";
import { getSatellitePda } from "program/pda/satellite";
import { getSatelliteOperatorPda } from "program/pda/satelliteOperator";
import { SatelliteMint } from "program/satellite-mint-program";

export interface closeSatelliteArgs {
    noradId: BN;
}

export async function closeSatelliteInstruction(
    program: Program<SatelliteMint>,
    args: closeSatelliteArgs,
    satelliteOperatorPubkey: PublicKey
) {
    const registryPda = await getRegistryPda(program);
    const satellitePda = await getSatellitePda(
        satelliteOperatorPubkey,
        args.noradId,
        program
    );
    const satelliteOperatorPda = await getSatelliteOperatorPda(
        program,
        satelliteOperatorPubkey
    );

    const txInstruction = await program.methods
        .closeSatellite(args)
        .accounts({
            authority: satelliteOperatorPubkey,
            registry: registryPda,
            satellite: satellitePda,
            satelliteOperator: satelliteOperatorPda,
        })
        .instruction();

    return txInstruction;
}
