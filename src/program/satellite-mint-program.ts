export type SatelliteMint = {
    version: "0.1.0";
    name: "satellite_mint";
    instructions: [
        {
            name: "initializeRegistry";
            accounts: [
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "registry";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "args";
                    type: {
                        defined: "RegistryInitArgs";
                    };
                }
            ];
        },
        {
            name: "closeRegistry";
            accounts: [
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "registry";
                    isMut: true;
                    isSigner: false;
                }
            ];
            args: [];
        },
        {
            name: "mintSatellite";
            accounts: [
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "satellite";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "satelliteOperator";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "registry";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "args";
                    type: {
                        defined: "SatelliteMintArgs";
                    };
                }
            ];
        },
        {
            name: "closeSatellite";
            accounts: [
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "satellite";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "registry";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "satelliteOperator";
                    isMut: true;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "args";
                    type: {
                        defined: "SatelliteCloseArgs";
                    };
                }
            ];
        },
        {
            name: "mintGroundStation";
            accounts: [
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "groundStation";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "groundStationOperator";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "registry";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "args";
                    type: {
                        defined: "GroundStationMintArgs";
                    };
                }
            ];
        },
        {
            name: "closeGroundStation";
            accounts: [
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "groundStation";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "groundStationOperator";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "registry";
                    isMut: true;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "args";
                    type: {
                        defined: "GroundStationCloseArgs";
                    };
                }
            ];
        },
        {
            name: "updateRegistryAuthority";
            accounts: [
                {
                    name: "authority";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "registry";
                    isMut: true;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "args";
                    type: {
                        defined: "UpdateRegistryAuthorityArgs";
                    };
                }
            ];
        }
    ];
    accounts: [
        {
            name: "groundStationOperator";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "owner";
                        type: "publicKey";
                    },
                    {
                        name: "groundStations";
                        type: {
                            vec: "u64";
                        };
                    }
                ];
            };
        },
        {
            name: "groundStation";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "owner";
                        type: "publicKey";
                    },
                    {
                        name: "stationId";
                        type: "u64";
                    },
                    {
                        name: "name";
                        type: "string";
                    },
                    {
                        name: "longitude";
                        type: "f64";
                    },
                    {
                        name: "latitude";
                        type: "f64";
                    },
                    {
                        name: "addedDate";
                        type: "i64";
                    },
                    {
                        name: "costPerMb";
                        type: "u32";
                    },
                    {
                        name: "frequencyType";
                        type: {
                            defined: "FrequencyType";
                        };
                    },
                    {
                        name: "operationStatus";
                        type: {
                            defined: "OperationStatus";
                        };
                    }
                ];
            };
        },
        {
            name: "registry";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "authority";
                        type: "publicKey";
                    },
                    {
                        name: "satelliteCount";
                        type: "u64";
                    },
                    {
                        name: "groundStationCount";
                        type: "u64";
                    }
                ];
            };
        },
        {
            name: "satelliteOperator";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "owner";
                        type: "publicKey";
                    },
                    {
                        name: "satellites";
                        type: {
                            vec: "u64";
                        };
                    }
                ];
            };
        },
        {
            name: "satellite";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "owner";
                        type: "publicKey";
                    },
                    {
                        name: "name";
                        type: "string";
                    },
                    {
                        name: "country";
                        type: "string";
                    },
                    {
                        name: "noradId";
                        type: "u64";
                    },
                    {
                        name: "launchDate";
                        type: "i64";
                    },
                    {
                        name: "mintDate";
                        type: "i64";
                    },
                    {
                        name: "orbitType";
                        type: "string";
                    },
                    {
                        name: "inclination";
                        type: "f64";
                    },
                    {
                        name: "altitude";
                        type: "f64";
                    },
                    {
                        name: "semiMajorAxis";
                        type: "f64";
                    },
                    {
                        name: "eccentricity";
                        type: "f64";
                    },
                    {
                        name: "raan";
                        type: "f64";
                    },
                    {
                        name: "argOfPeriapsis";
                        type: "f64";
                    },
                    {
                        name: "maneuverType";
                        type: {
                            defined: "ManeuverType";
                        };
                    },
                    {
                        name: "operationStatus";
                        type: {
                            defined: "OperationStatus";
                        };
                    }
                ];
            };
        }
    ];
    types: [
        {
            name: "GroundStationCloseArgs";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "stationId";
                        type: "u64";
                    }
                ];
            };
        },
        {
            name: "GroundStationMintArgs";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "owner";
                        type: "publicKey";
                    },
                    {
                        name: "stationId";
                        type: "u64";
                    },
                    {
                        name: "name";
                        type: "string";
                    },
                    {
                        name: "longitude";
                        type: "f64";
                    },
                    {
                        name: "latitude";
                        type: "f64";
                    },
                    {
                        name: "costPerMb";
                        type: "u32";
                    },
                    {
                        name: "addedDate";
                        type: "i64";
                    },
                    {
                        name: "frequencyType";
                        type: {
                            defined: "FrequencyType";
                        };
                    },
                    {
                        name: "operationStatus";
                        type: {
                            defined: "OperationStatus";
                        };
                    }
                ];
            };
        },
        {
            name: "UpdateRegistryAuthorityArgs";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "newAuthority";
                        type: "publicKey";
                    }
                ];
            };
        },
        {
            name: "RegistryInitArgs";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "authority";
                        type: "publicKey";
                    }
                ];
            };
        },
        {
            name: "SatelliteCloseArgs";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "noradId";
                        type: "u64";
                    }
                ];
            };
        },
        {
            name: "SatelliteMintArgs";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "owner";
                        type: "publicKey";
                    },
                    {
                        name: "name";
                        type: "string";
                    },
                    {
                        name: "country";
                        type: "string";
                    },
                    {
                        name: "noradId";
                        type: "u64";
                    },
                    {
                        name: "launchDate";
                        type: "i64";
                    },
                    {
                        name: "orbitType";
                        type: "string";
                    },
                    {
                        name: "inclination";
                        type: "f64";
                    },
                    {
                        name: "altitude";
                        type: "f64";
                    },
                    {
                        name: "semiMajorAxis";
                        type: "f64";
                    },
                    {
                        name: "eccentricity";
                        type: "f64";
                    },
                    {
                        name: "raan";
                        type: "f64";
                    },
                    {
                        name: "argOfPeriapsis";
                        type: "f64";
                    },
                    {
                        name: "maneuverType";
                        type: {
                            defined: "ManeuverType";
                        };
                    },
                    {
                        name: "operationStatus";
                        type: {
                            defined: "OperationStatus";
                        };
                    }
                ];
            };
        },
        {
            name: "FrequencyType";
            type: {
                kind: "enum";
                variants: [
                    {
                        name: "Uhf";
                    },
                    {
                        name: "Vhf";
                    },
                    {
                        name: "Sband";
                    },
                    {
                        name: "Xband";
                    },
                    {
                        name: "KuBand";
                    },
                    {
                        name: "KaBand";
                    }
                ];
            };
        },
        {
            name: "OperationStatus";
            type: {
                kind: "enum";
                variants: [
                    {
                        name: "Active";
                    },
                    {
                        name: "Maintenance";
                    },
                    {
                        name: "Offline";
                    }
                ];
            };
        },
        {
            name: "ManeuverType";
            type: {
                kind: "enum";
                variants: [
                    {
                        name: "StationKeeping";
                    },
                    {
                        name: "OrbitRaising";
                    },
                    {
                        name: "OrbitLowering";
                    },
                    {
                        name: "InclinationChange";
                    },
                    {
                        name: "PhaseAdjustment";
                    },
                    {
                        name: "CollisionAvoidance";
                    },
                    {
                        name: "EndOfLife";
                    },
                    {
                        name: "Desaturation";
                    }
                ];
            };
        }
    ];
    events: [
        {
            name: "RegistryInitialized";
            fields: [
                {
                    name: "authority";
                    type: "publicKey";
                    index: false;
                },
                {
                    name: "satelliteCount";
                    type: "u64";
                    index: false;
                }
            ];
        }
    ];
    errors: [
        {
            code: 6000;
            name: "UnauthorizedAccess";
            msg: "Unauthorized Access";
        },
        {
            code: 6001;
            name: "StringSizeTooLong";
            msg: "string size too long";
        },
        {
            code: 6002;
            name: "MathOverflow";
            msg: "math overflow";
        },
        {
            code: 6003;
            name: "IndexNotFound";
            msg: "norad id not found";
        }
    ];
};

export const IDL: SatelliteMint = {
    version: "0.1.0",
    name: "satellite_mint",
    instructions: [
        {
            name: "initializeRegistry",
            accounts: [
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "registry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "args",
                    type: {
                        defined: "RegistryInitArgs",
                    },
                },
            ],
        },
        {
            name: "closeRegistry",
            accounts: [
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "registry",
                    isMut: true,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "mintSatellite",
            accounts: [
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "satellite",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "satelliteOperator",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "registry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "args",
                    type: {
                        defined: "SatelliteMintArgs",
                    },
                },
            ],
        },
        {
            name: "closeSatellite",
            accounts: [
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "satellite",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "registry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "satelliteOperator",
                    isMut: true,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "args",
                    type: {
                        defined: "SatelliteCloseArgs",
                    },
                },
            ],
        },
        {
            name: "mintGroundStation",
            accounts: [
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "groundStation",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "groundStationOperator",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "registry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "args",
                    type: {
                        defined: "GroundStationMintArgs",
                    },
                },
            ],
        },
        {
            name: "closeGroundStation",
            accounts: [
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "groundStation",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "groundStationOperator",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "registry",
                    isMut: true,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "args",
                    type: {
                        defined: "GroundStationCloseArgs",
                    },
                },
            ],
        },
        {
            name: "updateRegistryAuthority",
            accounts: [
                {
                    name: "authority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "registry",
                    isMut: true,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "args",
                    type: {
                        defined: "UpdateRegistryAuthorityArgs",
                    },
                },
            ],
        },
    ],
    accounts: [
        {
            name: "groundStationOperator",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "groundStations",
                        type: {
                            vec: "u64",
                        },
                    },
                ],
            },
        },
        {
            name: "groundStation",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "stationId",
                        type: "u64",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "longitude",
                        type: "f64",
                    },
                    {
                        name: "latitude",
                        type: "f64",
                    },
                    {
                        name: "addedDate",
                        type: "i64",
                    },
                    {
                        name: "costPerMb",
                        type: "u32",
                    },
                    {
                        name: "frequencyType",
                        type: {
                            defined: "FrequencyType",
                        },
                    },
                    {
                        name: "operationStatus",
                        type: {
                            defined: "OperationStatus",
                        },
                    },
                ],
            },
        },
        {
            name: "registry",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "authority",
                        type: "publicKey",
                    },
                    {
                        name: "satelliteCount",
                        type: "u64",
                    },
                    {
                        name: "groundStationCount",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "satelliteOperator",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "satellites",
                        type: {
                            vec: "u64",
                        },
                    },
                ],
            },
        },
        {
            name: "satellite",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "country",
                        type: "string",
                    },
                    {
                        name: "noradId",
                        type: "u64",
                    },
                    {
                        name: "launchDate",
                        type: "i64",
                    },
                    {
                        name: "mintDate",
                        type: "i64",
                    },
                    {
                        name: "orbitType",
                        type: "string",
                    },
                    {
                        name: "inclination",
                        type: "f64",
                    },
                    {
                        name: "altitude",
                        type: "f64",
                    },
                    {
                        name: "semiMajorAxis",
                        type: "f64",
                    },
                    {
                        name: "eccentricity",
                        type: "f64",
                    },
                    {
                        name: "raan",
                        type: "f64",
                    },
                    {
                        name: "argOfPeriapsis",
                        type: "f64",
                    },
                    {
                        name: "maneuverType",
                        type: {
                            defined: "ManeuverType",
                        },
                    },
                    {
                        name: "operationStatus",
                        type: {
                            defined: "OperationStatus",
                        },
                    },
                ],
            },
        },
    ],
    types: [
        {
            name: "GroundStationCloseArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "stationId",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "GroundStationMintArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "stationId",
                        type: "u64",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "longitude",
                        type: "f64",
                    },
                    {
                        name: "latitude",
                        type: "f64",
                    },
                    {
                        name: "costPerMb",
                        type: "u32",
                    },
                    {
                        name: "addedDate",
                        type: "i64",
                    },
                    {
                        name: "frequencyType",
                        type: {
                            defined: "FrequencyType",
                        },
                    },
                    {
                        name: "operationStatus",
                        type: {
                            defined: "OperationStatus",
                        },
                    },
                ],
            },
        },
        {
            name: "UpdateRegistryAuthorityArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "newAuthority",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "RegistryInitArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "authority",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "SatelliteCloseArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "noradId",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "SatelliteMintArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "country",
                        type: "string",
                    },
                    {
                        name: "noradId",
                        type: "u64",
                    },
                    {
                        name: "launchDate",
                        type: "i64",
                    },
                    {
                        name: "orbitType",
                        type: "string",
                    },
                    {
                        name: "inclination",
                        type: "f64",
                    },
                    {
                        name: "altitude",
                        type: "f64",
                    },
                    {
                        name: "semiMajorAxis",
                        type: "f64",
                    },
                    {
                        name: "eccentricity",
                        type: "f64",
                    },
                    {
                        name: "raan",
                        type: "f64",
                    },
                    {
                        name: "argOfPeriapsis",
                        type: "f64",
                    },
                    {
                        name: "maneuverType",
                        type: {
                            defined: "ManeuverType",
                        },
                    },
                    {
                        name: "operationStatus",
                        type: {
                            defined: "OperationStatus",
                        },
                    },
                ],
            },
        },
        {
            name: "FrequencyType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Uhf",
                    },
                    {
                        name: "Vhf",
                    },
                    {
                        name: "Sband",
                    },
                    {
                        name: "Xband",
                    },
                    {
                        name: "KuBand",
                    },
                    {
                        name: "KaBand",
                    },
                ],
            },
        },
        {
            name: "OperationStatus",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Active",
                    },
                    {
                        name: "Maintenance",
                    },
                    {
                        name: "Offline",
                    },
                ],
            },
        },
        {
            name: "ManeuverType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "StationKeeping",
                    },
                    {
                        name: "OrbitRaising",
                    },
                    {
                        name: "OrbitLowering",
                    },
                    {
                        name: "InclinationChange",
                    },
                    {
                        name: "PhaseAdjustment",
                    },
                    {
                        name: "CollisionAvoidance",
                    },
                    {
                        name: "EndOfLife",
                    },
                    {
                        name: "Desaturation",
                    },
                ],
            },
        },
    ],
    events: [
        {
            name: "RegistryInitialized",
            fields: [
                {
                    name: "authority",
                    type: "publicKey",
                    index: false,
                },
                {
                    name: "satelliteCount",
                    type: "u64",
                    index: false,
                },
            ],
        },
    ],
    errors: [
        {
            code: 6000,
            name: "UnauthorizedAccess",
            msg: "Unauthorized Access",
        },
        {
            code: 6001,
            name: "StringSizeTooLong",
            msg: "string size too long",
        },
        {
            code: 6002,
            name: "MathOverflow",
            msg: "math overflow",
        },
        {
            code: 6003,
            name: "IndexNotFound",
            msg: "norad id not found",
        },
    ],
};
