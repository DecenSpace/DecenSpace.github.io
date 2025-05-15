import EarthViewer, { IEarthViewerProps } from "components/EarthViewer";
import { Entity } from "resium";
import { Cartesian3, Color, JulianDate, SampledPositionProperty, Math as CesiumMath, Matrix3, LagrangePolynomialApproximation } from "cesium";
import { ManeuverTypes, OperationStatus } from "../utils/RegistrationUtils";

// hopefully this will look like the blockchain record
export interface ISatellite {
    owner: string;
    name: string;
    country: string;
    noradId: string;
    launchDate: Date;
    mintDate: Date;
    // orbitType: string;
    inclination: number;
    altitude: number;
    maneuverType: ManeuverTypes;
    operationStatus: OperationStatus;

    semiMajorAxis: number;
}

function createEciPosition(
    angleDeg: number,
    semiMajorAxis: number,
    eccentricity: number,
    inclination: number,
    raan: number,
    argOfPeriapsis: number
): Cartesian3 {

    const ν = CesiumMath.toRadians(angleDeg);
    const a = semiMajorAxis;
    const e = eccentricity;
    const r = (a * (1 - e * e)) / (1 + e * Math.cos(ν));
    const xOrb = r * Math.cos(ν);
    const yOrb = r * Math.sin(ν);
    const zOrb = 0;
    const perifocal = new Cartesian3(xOrb, yOrb, zOrb);

    const i = CesiumMath.toRadians(inclination);
    const Ω = CesiumMath.toRadians(raan);
    const ω = CesiumMath.toRadians(argOfPeriapsis);

    const Rz_RAAN = Matrix3.fromRotationZ(Ω, new Matrix3());
    const Rx_Inc = Matrix3.fromRotationX(i, new Matrix3());
    const Rz_ArgPeriapsis = Matrix3.fromRotationZ(ω, new Matrix3());

    const rotation = Matrix3.multiply(
        Rz_RAAN,
        Matrix3.multiply(Rx_Inc, Rz_ArgPeriapsis, new Matrix3()),
        new Matrix3()
    );

    return Matrix3.multiplyByVector(rotation, perifocal, new Cartesian3());
};

function createSampledPosition(
    satellite: ISatellite,
    start: JulianDate,
    steps = 360
): SampledPositionProperty {

    const position = new SampledPositionProperty();

    for (let deg = 0; deg <= 360; deg += 360 / steps) {

        const time = JulianDate.addSeconds(start, deg, new JulianDate());

        const eciPosition = createEciPosition(
            deg,
            satellite.semiMajorAxis,
            0,
            satellite.inclination,
            180,
            90

        );

        position.addSample(time, eciPosition);
    }

    return position;
};

const SatelliteEntity: React.FC<ISatellite> = (satellite) => (
    <Entity
        name={satellite.name}
        position={createSampledPosition(satellite, JulianDate.now())}
        path={{
            resolution: 1,
            material: new Color(255, 0, 0),
            width: 2,
            leadTime: Number.POSITIVE_INFINITY,
            trailTime: Number.POSITIVE_INFINITY,
        }}
        point={{
            pixelSize: 8,
            color: new Color(255, 0, 0),
            outlineColor: Color.BLACK,
            outlineWidth: 1,
        }}
        description={`Name: ${satellite.name}, Owner: ${satellite.owner}, Country: ${satellite.country}`}
    />
);

interface ISatellitesViewerProps extends IEarthViewerProps {
    satellites: ISatellite[];
    selectedSatelliteId?: string;
    fullWidthAndHeight?: boolean;
}

const SatellitesViewer: React.FC<ISatellitesViewerProps> = ({
    satellites,
    selectedSatelliteId,
    fullWidthAndHeight = true,
    style,
    ...props
}) => {

    return (
        <EarthViewer {...props}>
            {satellites?.map(satellite => (
                <SatelliteEntity
                    key={satellite.noradId}
                    {...satellite}
                />
            ))}
        </EarthViewer>
    );
};

export default SatellitesViewer;