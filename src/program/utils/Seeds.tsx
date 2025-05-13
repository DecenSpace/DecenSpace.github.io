import * as buffer from "buffer";

window.Buffer = buffer.Buffer;

export const REGISTRY_SEEDS = Buffer.from("registry");
export const SATELLITE_SEEDS = Buffer.from("satellite");
export const SATELLITE_OPERATOR_SEEDS = Buffer.from("satellite-operator");
