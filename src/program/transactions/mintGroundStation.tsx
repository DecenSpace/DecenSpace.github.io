import { Program } from "@coral-xyz/anchor";
import { WalletContextState } from "@solana/wallet-adapter-react";
import {
    clusterApiUrl,
    Connection,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    Transaction,
} from "@solana/web3.js";
import { mintGroundStationIx } from "program/instructions/mintGroundStation";
import { SatelliteMint } from "program/satellite-mint-program";
import { IStationFormValues } from "routes/app/ground-station-ops/stations/register/components/StationRegistrationForm";

export async function sendAndConfirmMintGroundStation(
    program: Program<SatelliteMint>,
    args: IStationFormValues,
    wallet: WalletContextState,
    groundStationOperatorPubkey: PublicKey
) {
    const connection = new Connection(clusterApiUrl("devnet"));
    const mintGroundStationInstruction = await mintGroundStationIx(
        program,
        wallet,
        args,
        groundStationOperatorPubkey
    );

    const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();

    // build tx
    const tx = new Transaction({
        feePayer: groundStationOperatorPubkey,
        blockhash,
        lastValidBlockHeight,
    });
    tx.add(mintGroundStationInstruction);

    const signature = await wallet.sendTransaction(tx, connection);
    await connection.confirmTransaction({
        signature,
        blockhash,
        lastValidBlockHeight,
    });

    return signature;
}
