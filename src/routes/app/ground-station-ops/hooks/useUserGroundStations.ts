import BN from "bn.js";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";
import { useState } from "react";

export default function useUserGroundStations() {

    const [stations, setStations] = useState<GroundStationDataValue[]>([]);

    const removeStation = (stationId: BN) => {

        setStations((prevStations) =>
            prevStations.filter((station) => !station.station_id.eq(stationId))
        );
    };

    return { stations, removeStation };
}