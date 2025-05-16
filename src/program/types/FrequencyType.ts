export type FrequencyType = "uhf" | "vhf" | "sband" | "kband" | "kuBand" | "kaBand";

export function parseFrequencyType(frequencyType: { [K in FrequencyType]?: {} }): FrequencyType {

    if (frequencyType.uhf) {
        return "uhf";
    } else if (frequencyType.vhf) {
        return "vhf";
    } else if (frequencyType["sband"]) {
        return "sband";
    } else if (frequencyType["kband"]) {
        return "kband";
    } else if (frequencyType["kuBand"]) {
        return "kuBand";
    } else if (frequencyType["kaBand"]) {
        return "kaBand";
    } else {
        console.error("Invalid frequency type:", frequencyType);
        return "uhf"; // Default value
    }
}

export function getFrequencyTypeText(frequencyTypeParam: FrequencyType | { [K in FrequencyType]?: {} }): string {

    const frequencyType = typeof frequencyTypeParam === "string" ? frequencyTypeParam : parseFrequencyType(frequencyTypeParam);

    switch (frequencyType) {
        case "uhf":
            return "UHF";
        case "vhf":
            return "VHF";
        case "sband":
            return "S-BAND";
        case "kband":
            return "K-BAND";
        case "kuBand":
            return "KU-BAND";
        case "kaBand":
            return "KA-BAND";
        default:
            return "";
    }
}