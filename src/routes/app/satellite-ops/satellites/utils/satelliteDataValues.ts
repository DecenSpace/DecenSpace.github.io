import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";

export interface SatelliteDataValues {
    owner: PublicKey;
    name: string;
    country: string;
    noradId: BN;
    launchDate: BN;
    orbitType: string;
    inclination: number;
    altitude: number;
    semiMajorAxis: number;
    eccentricity: number;
    raan: number;
    argOfPeriapsis: number;
}
