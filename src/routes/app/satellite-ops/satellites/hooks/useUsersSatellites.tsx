import { useWallet } from "@solana/wallet-adapter-react";
import BN from "bn.js";
import { getSatelliteData } from "program/accounts/satellite";
import { getSatelliteOwnerData } from "program/accounts/satelliteOwner";
import { useSatelliteProgram } from "program/program-data-access";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";
import { useEffect, useState } from "react";

export default function useUsersSatellites() {

    const { program } = useSatelliteProgram();
    const wallet = useWallet();

    const [satellites, setSatellites] = useState<SatelliteDataValues[]>([]);

    const fetchSatellites = (async () => {

        if (!wallet.publicKey) return;

        const walletPublicKey = wallet.publicKey;

        const { satellites: satelliteNoradIds } = await getSatelliteOwnerData(
            walletPublicKey,
            program
        );

        const satellites = await Promise.all(satelliteNoradIds.map((noradId) => getSatelliteData(
            walletPublicKey,
            program,
            noradId
        )));

        setSatellites(satellites);
    });

    useEffect(() => {

        fetchSatellites();

    }, [wallet.publicKey, program.programId]);

    const removeSatellite = async (noradId: BN) => {

        setSatellites((prevSatellites) =>
            prevSatellites.filter((satellite) => !satellite.noradId.eq(noradId))
        );
        await fetchSatellites();
    };

    return { satellites, removeSatellite };
}