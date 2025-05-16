import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { ManeuverType } from "./ManeuverType";
import { OperationStatus } from "./OperationStatus";

export interface SatelliteDataValues {
    owner: PublicKey;
    name: string;
    country: string;
    noradId: BN;
    launchDate: BN;
    orbitType: string;
    inclination: number;
    /** @deprecated will be removed without replacement */
    altitude?: number;
    semiMajorAxis: number;
    eccentricity: number;
    raan: number;
    argOfPeriapsis: number;
    maneuverType: { [K in ManeuverType]?: {}} ;
    operationStatus: { [K in OperationStatus]?: {}} ;
}