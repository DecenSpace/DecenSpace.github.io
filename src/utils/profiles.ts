export const profiles = {
    groundStation: {
        buttonText: "Manage Ground Stations",
        appPath: "/app/ground-station-ops",
        contactEmailLink: "mailto:groundstation@decenspace.com" 
    },
    satelliteOperator: {
        buttonText: "Manage Satellites",
        appPath: "/app/satellite-ops",
        contactEmailLink: "mailto:satellites@decenspace.com"
    }
};

export type ProfileType = keyof typeof profiles;