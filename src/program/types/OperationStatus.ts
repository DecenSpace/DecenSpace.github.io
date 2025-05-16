export type OperationStatus = "active" | "offline" | "maintenance";

export function parseOperationStatus(status: { [K in OperationStatus]?: {} }): OperationStatus {

    if (status.active) {
        return "active";
    } else if (status.offline) {
        return "offline";
    } else if (status.maintenance) {
        return "maintenance";
    } else {
        console.error("Invalid operation status:", status);
        return "offline";
    }
}