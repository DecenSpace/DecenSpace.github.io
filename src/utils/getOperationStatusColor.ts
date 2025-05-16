import { OperationStatus } from "program/types/OperationStatus";

export default function getOperationStatusColor(status: OperationStatus, disabled?: boolean, disabledAlpha = 0.2): [number, number, number, number] {

    const opacity = disabled ? disabledAlpha : 1;

    switch (status) {
        case "active":
            return [0, 255, 0, opacity]; // Green
        case "offline":
            return [255, 0, 0, opacity]; // Red
        case "maintenance":
            return [255, 255, 0, opacity]; // Yellow
        default:
            return [255, 255, 255, opacity]; // White
    }
}