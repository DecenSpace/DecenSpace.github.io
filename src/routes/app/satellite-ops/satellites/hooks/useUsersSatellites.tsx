import { useWallet } from "@solana/wallet-adapter-react";
import { getSatelliteData } from "program/accounts/satellite";
import { getSatelliteOwnerData } from "program/accounts/satelliteOwner";
import { useSatelliteProgram } from "program/program-data-access";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";
import { useEffect, useState } from "react";

export default function useUsersSatellites() {

    const { program } = useSatelliteProgram();
    const wallet = useWallet();

    const [satellites, setSatellites] = useState<SatelliteDataValues[]>([]);

    useEffect(() => {

        (async () => {

            const { satellites: satelliteNoradIds } = await getSatelliteOwnerData(
                wallet.publicKey!,
                program
            );
    
            const satellites = await Promise.all(satelliteNoradIds.map((noradId) => getSatelliteData(
                wallet.publicKey!,
                program,
                noradId
            )));

            setSatellites(satellites);
        })();


    }, [wallet.publicKey, program.programId]);

    return satellites;
}