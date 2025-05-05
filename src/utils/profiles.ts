export const profiles = {
    groundStation: {
        buttonText: "Manage Ground Stations",
        startPath: "/start/ground-station-ops",
        appPath: "/app/ground-station-ops",
        contactEmailLink: "mailto:groundstation@decenspace.com" 
    },
    satelliteOperator: {
        buttonText: "Manage Satellites",
        startPath: "/start/satellite-ops",
        appPath: "/app/satellite-ops",
        contactEmailLink: "mailto:satellites@decenspace.com"
    }
};

export type ProfileType = keyof typeof profiles;