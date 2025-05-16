import EarthViewer, { IEarthViewerProps } from "components/EarthViewer";
import { Entity } from "resium";
import { Cartesian3, Color, JulianDate, SampledPositionProperty, Math as CesiumMath, Matrix3 } from "cesium";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";
import getOperationStatusColor from "utils/getOperationStatusColor";
import { OperationStatus } from "program/types/OperationStatus";

function createEciPosition(
    angleDeg: number,
    semiMajorAxis: number,
    eccentricity: number,
    inclination: number,
    raan: number,
    argOfPeriapsis: number
): Cartesian3 {

    const angleAsRadians = CesiumMath.toRadians(angleDeg);
    const a = semiMajorAxis;
    const e = eccentricity;
    const r = (a * (1 - e * e)) / (1 + e * Math.cos(angleAsRadians));
    const xOrb = r * Math.cos(angleAsRadians);
    const yOrb = r * Math.sin(angleAsRadians);
    const zOrb = 0;
    const perifocal = new Cartesian3(xOrb, yOrb, zOrb);

    const i = CesiumMath.toRadians(inclination);
    const Ω = CesiumMath.toRadians(raan);
    const ω = CesiumMath.toRadians(argOfPeriapsis);

    const rotationZRaan = Matrix3.fromRotationZ(Ω, new Matrix3());
    const rotationXInclination = Matrix3.fromRotationX(i, new Matrix3());
    const rotationXArgPeriapsis = Matrix3.fromRotationZ(ω, new Matrix3());

    const rotation = Matrix3.multiply(
        rotationZRaan,
        Matrix3.multiply(rotationXInclination, rotationXArgPeriapsis, new Matrix3()),
        new Matrix3()
    );

    return Matrix3.multiplyByVector(rotation, perifocal, new Cartesian3());
};

function createSampledPosition(
    satellite: SatelliteDataValues,
    start: JulianDate,
    steps = 360
): SampledPositionProperty {

    const position = new SampledPositionProperty();

    for (let deg = 0; deg <= 360; deg += 360 / steps) {

        const time = JulianDate.addSeconds(start, deg, new JulianDate());

        const eciPosition = createEciPosition(
            deg,
            satellite.semiMajorAxis,
            satellite.eccentricity,
            satellite.inclination,
            satellite.raan,
            satellite.argOfPeriapsis,
        );

        position.addSample(time, eciPosition);
    }

    return position;
};

const SatelliteEntity: React.FC<{ satellite: SatelliteDataValues, selected: boolean }> = ({ satellite, selected }) => {

    const [r, g, b, a] = getOperationStatusColor(
        Object.keys(satellite.operationStatus)[0] as OperationStatus,
        selected
    );

    const color = new Color(r, g, b, a);

    return (
        <Entity
            name={satellite.name}
            position={createSampledPosition(satellite, JulianDate.now())}
            path={{
                resolution: 1,
                material: color,
                width: 2,
                leadTime: Number.POSITIVE_INFINITY,
                trailTime: Number.POSITIVE_INFINITY,
            }}
            point={{
                pixelSize: 8,
                color: color,
                outlineColor: Color.BLACK,
                outlineWidth: 1,
            }}
            description={`Name: ${satellite.name}, Owner: ${satellite.owner}, Country: ${satellite.country}`}
        />
    );
};

interface ISatellitesViewerProps extends IEarthViewerProps {
    satellites: SatelliteDataValues[];
    selectedSatellite?: SatelliteDataValues | null;
    fullWidthAndHeight?: boolean;
}

const SatellitesViewer: React.FC<ISatellitesViewerProps> = ({
    satellites,
    selectedSatellite,
    fullWidthAndHeight = true,
    ...props
}) => {

    return (
        <EarthViewer {...props}>
            {satellites?.map(satellite => (
                <SatelliteEntity
                    key={satellite.noradId.toString()}
                    satellite={satellite}
                    selected={satellite === selectedSatellite}
                />
            ))}
        </EarthViewer>
    );
};

export default SatellitesViewer;