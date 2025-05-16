import { useConnection } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getSatelliteProgram } from "./program-exports";
import useAnchorProvider from "components/SolanaProvider";

export function useSatelliteProgram() {
    const { connection } = useConnection();
    const provider = useAnchorProvider();
    const program = getSatelliteProgram(provider);
    const cluster = "devnet";

    const getProgramAccount = useQuery({
        queryKey: ["get-program-account", { cluster }],
        queryFn: () => connection.getParsedAccountInfo(program.programId),
    });

    return { program, getProgramAccount };
}
