import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";
import { useState } from "react";

const demoData = [
    {
        station_id: new BN(1001),
        name: "Darmstadt",
        latitude: new BN(49.8708),
        longitude: new BN(8.6512),
        owner: PublicKey.default,
        frequency_type: { sband: {} },
        cost_per_mb: 0.05,
        operationStatus: { active: {} },
    },
    {
        station_id: new BN(1002),
        name: "Kourou",
        latitude: new BN(5.236),
        longitude: new BN(-52.768),
        owner: PublicKey.default,
        frequency_type: { uhf: {} },
        cost_per_mb: 0.07,
        operationStatus: { offline: {} },
    },
    {
        station_id: new BN(1003),
        name: "Tromsø",
        latitude: new BN(69.6496),
        longitude: new BN(18.956),
        owner: PublicKey.default,
        frequency_type: { sband: {} },
        cost_per_mb: 0.08,
        operationStatus: { active: {} },
    },
    {
        station_id: new BN(1004),
        name: "Alice Springs",
        latitude: new BN(-23.698),
        longitude: new BN(133.8807),
        owner: PublicKey.default,
        frequency_type: { uhf: {} },
        cost_per_mb: 0.06,
        operationStatus: { active: {} },
    },
    {
        station_id: new BN(1005),
        name: "Hawaii",
        latitude: new BN(21.3069),
        longitude: new BN(-157.8583),
        owner: PublicKey.default, // new PublicKey("11111111111111111111111111111111"),
        frequency_type: { sband: {} },
        cost_per_mb: 0.09,
        operationStatus: { active: {} },
    }
] satisfies GroundStationDataValue[];

export default function useUserGroundStations() {

    const [stations, setStations] = useState<GroundStationDataValue[]>(demoData);

    const removeStation = (stationId: BN) => {

        setStations((prevStations) =>
            prevStations.filter((station) => !station.station_id.eq(stationId))
        );
    };

    return { stations, removeStation };
}