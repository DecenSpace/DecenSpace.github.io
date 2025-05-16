import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { getGroundStation } from "program/accounts/groundStation";
import { getGroundStationOwnerData } from "program/accounts/groundStationOwner";
import { useSatelliteProgram } from "program/program-data-access";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";
import { useEffect, useState } from "react";

export default function useUserGroundStations() {
    const { program } = useSatelliteProgram();
    const wallet = useWallet();

    const [groundStations, setGroundStations] = useState<
        GroundStationDataValue[]
    >([]);

    const fetchGroundStations = async () => {
        if (!wallet.publicKey) return;

        const walletPublicKey = wallet.publicKey;

        const groundStationOwner = await getGroundStationOwnerData(
            program,
            wallet.publicKey
        );

        const groundStations = await Promise.all(
            groundStationOwner.groundStations.map((stationId) =>
                getGroundStation(program, walletPublicKey, stationId)
            )
        );

        setGroundStations(groundStations);
    };

    useEffect(() => {
        fetchGroundStations();
    }, [wallet.publicKey, program.programId]);

    const removeGroundStation = async (stationId: BN) => {
        setGroundStations((prevGroundStations) =>
            prevGroundStations.filter(
                (groundStation) => !groundStation.stationId.eq(stationId)
            )
        );
        await fetchGroundStations();
    };

    return { groundStations, removeGroundStation };
}
