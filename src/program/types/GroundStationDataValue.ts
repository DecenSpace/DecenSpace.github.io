import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { FrequencyType } from "./FrequencyType";
import { OperationStatus } from "./OperationStatus";

export interface GroundStationDataValue {
    owner: PublicKey;
    station_id: BN;
    name: string;
    longitude: BN;
    latitude: BN
    cost_per_mb: number;
    frequencyType: { [K in FrequencyType]?: {}} ;
    operationStatus: { [K in OperationStatus]?: {}} ;
}