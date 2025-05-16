export type FrequencyType = "UHF" | "VHF" | "S-BAND" | "X-BAND" | "KU-BAND" | "KA-BAND";

export function parseFrequencyType(frequencyType: { [K in FrequencyType]?: {} }): FrequencyType {

    if (frequencyType.UHF) {
        return "UHF";
    } else if (frequencyType.VHF) {
        return "VHF";
    } else if (frequencyType["S-BAND"]) {
        return "S-BAND";
    } else if (frequencyType["X-BAND"]) {
        return "X-BAND";
    } else if (frequencyType["KU-BAND"]) {
        return "KU-BAND";
    } else if (frequencyType["KA-BAND"]) {
        return "KA-BAND";
    } else {
        console.error("Invalid frequency type:", frequencyType);
        return "UHF"; // Default value
    }
}