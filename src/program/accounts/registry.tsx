import { Program } from "@coral-xyz/anchor";
import { getRegistryPda } from "program/pda/registry";
import { SatelliteMint } from "program/satellite-mint-program";

export async function getRegistry(program: Program<SatelliteMint>) {
    const registryPda = await getRegistryPda(program);

    const registry = await program.account.registry.fetch(registryPda);

    return registry;
}
