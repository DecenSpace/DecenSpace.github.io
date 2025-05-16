import { Program } from "@coral-xyz/anchor";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { BN } from "bn.js";
import { getGroundStationOperatorPda } from "program/pda/groundStationOperator";
import { getGroundStationPda } from "program/pda/groundStationPda";
import { getRegistryPda } from "program/pda/registry";
import { SatelliteMint } from "program/satellite-mint-program";
import { IStationFormValues } from "routes/app/ground-station-ops/stations/register/components/StationRegistrationForm";

export async function mintGroundStationIx(
    program: Program<SatelliteMint>,
    wallet: WalletContextState,
    args: IStationFormValues,
    groundStationOperatorPubkey: PublicKey
) {
    const groundStationPda = await getGroundStationPda(
        program,
        groundStationOperatorPubkey,
        new BN(args.stationId)
    );
    const groundStationOperatorPda = await getGroundStationOperatorPda(
        program,
        groundStationOperatorPubkey
    );
    const registryPda = await getRegistryPda(program);

    const mintGroundStationIx = await program.methods
        .mintGroundStation({
            owner: groundStationOperatorPubkey,
            stationId: new BN(args.stationId),
            name: args.name,
            longitude: args.longitude,
            latitude: args.latitude,
            costPerMb: args.cost_per_mb,
            addedDate: new BN(new Date().getTime()),
            frequencyType: { [args.frequencyType]: {} } as any,
            operationStatus: { [args.operationStatus]: {} } as any,
        })
        .accounts({
            authority: groundStationOperatorPubkey,
            groundStation: groundStationPda,
            groundStationOperator: groundStationOperatorPda,
            registry: registryPda,
            systemProgram: SystemProgram.programId,
        })
        .instruction();

    return mintGroundStationIx;
}
