import { Program } from "@coral-xyz/anchor";
import { WalletContextState } from "@solana/wallet-adapter-react";
import {
    clusterApiUrl,
    Connection,
    PublicKey,
    Transaction,
} from "@solana/web3.js";
import {
    closeSatelliteArgs,
    closeSatelliteInstruction,
} from "program/instructions/closeSatellite";
import { getRegistryPda } from "program/pda/registry";
import { getSatelliteOperatorPda } from "program/pda/satelliteOperator";
import { SatelliteMint } from "program/satellite-mint-program";

export async function closeSatelliteTx(
    program: Program<SatelliteMint>,
    args: closeSatelliteArgs,
    satelliteOperatorPubkey: PublicKey,
    wallet: WalletContextState
) {
    const connection = new Connection(clusterApiUrl("devnet"));

    const txInstruction = await closeSatelliteInstruction(
        program,
        args,
        satelliteOperatorPubkey
    );
    const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();

    // build tx
    const tx = new Transaction({
        feePayer: satelliteOperatorPubkey,
        blockhash,
        lastValidBlockHeight,
    });

    tx.add(txInstruction);

    const signature = await wallet.sendTransaction(tx, connection);
    await connection.confirmTransaction({
        signature,
        blockhash,
        lastValidBlockHeight,
    });

    console.log("close tx: ", signature);
}
