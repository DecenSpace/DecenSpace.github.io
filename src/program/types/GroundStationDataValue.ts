import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { FrequencyType } from "./FrequencyType";
import { OperationStatus } from "./OperationStatus";

export interface GroundStationDataValue {
    owner: PublicKey;
    stationId: BN;
    name: string;
    longitude: BN;
    latitude: BN;
    addedDate: Date;
    costPerMb: number;
    frequencyType: { [K in FrequencyType]?: {} };
    operationStatus: { [K in OperationStatus]?: {} };
}
