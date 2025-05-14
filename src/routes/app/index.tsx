import { Program } from "@coral-xyz/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import useAnchorProvider from "components/SolanaProvider";
import { getSatelliteProgram, SatelliteMint } from "program/program-exports";
import { REGISTRY_SEEDS, SATELLITE_OPERATOR_SEEDS } from "program/utils/Seeds";
import { createContext, useContext, useMemo } from "react";
import { Outlet } from "react-router-dom";
import adminPubkey from "./admin/utils/adminPubkey";

interface IProgramsContext {
    satelliteProgram: Program<SatelliteMint>;
}

const ProgramsContext = createContext<IProgramsContext>({
    satelliteProgram: {} as Program<SatelliteMint>
});

export function useSatelliteProgram() {

    const { satelliteProgram } = useContext(ProgramsContext);

    if (!satelliteProgram?.programId) {
        throw new Error("Context not provided");
    }

    return satelliteProgram;
}

export function useProgramAddresses() {

    const { satelliteProgram } = useContext(ProgramsContext);
    const wallet = useWallet();

    if (!wallet.publicKey) {
        return null;
    }

    const [registryPda] = PublicKey.findProgramAddressSync(
        [REGISTRY_SEEDS, adminPubkey.toBuffer()],
        satelliteProgram.programId
    );

    const [satelliteOperatorPda] = PublicKey.findProgramAddressSync(
        [SATELLITE_OPERATOR_SEEDS, wallet.publicKey.toBuffer()],
        satelliteProgram.programId
    );

    return {
        registryPda,
        satelliteOperatorPda,
        systemPda: SystemProgram.programId,
        walletPubkey: wallet.publicKey
    };
}

const App: React.FC = () => {

    const provider = useAnchorProvider();

    const satelliteProgram = useMemo(() => getSatelliteProgram(provider), [provider]);

    return (
        <ProgramsContext.Provider value={{ satelliteProgram }}>
            <Outlet />
        </ProgramsContext.Provider>
    );
};

export default App;
