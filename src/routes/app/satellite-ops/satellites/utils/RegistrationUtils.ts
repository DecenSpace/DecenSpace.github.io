export enum ManeuverTypes {
  StationKeeping = "StationKeeping",
  OrbitRaising = "OrbitRaising",
  InclinationChange = "InclinationChange",
  PhaseAdjustment = "PhaseAdjustment",
  CollisionAvoidance = "CollisionAvoidance",
  EndOfLife = "EndOfLife",
  Desaturation = "Desaturation",
}

export const selectManeuverTypes: Array<[value: ManeuverTypes, label: string]> =
  [
    [ManeuverTypes.StationKeeping, "Station Keeping"],
    [ManeuverTypes.OrbitRaising, "Orbit Raising"],
    [ManeuverTypes.InclinationChange, "Inclination Change"],
    [ManeuverTypes.PhaseAdjustment, "Phase Adjustment"],
    [ManeuverTypes.CollisionAvoidance, "Collision Avoidance"],
    [ManeuverTypes.EndOfLife, "End of life"],
    [ManeuverTypes.Desaturation, "Desaturation"],
  ];

export enum OperationStatus {
  Active = "Active",
  Maintenance = "Maintenance",
  Offline = "Offline",
}

export const selectOperationStatus: Array<
  [value: OperationStatus, label: string]
> = [
    [OperationStatus.Active, "Active"],
    [OperationStatus.Maintenance, "Maintenance"],
    [OperationStatus.Offline, "Offline"],
  ];
