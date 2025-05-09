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
    ],
};
