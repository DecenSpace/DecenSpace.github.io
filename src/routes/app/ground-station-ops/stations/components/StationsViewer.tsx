import EarthViewer, { IEarthViewerProps } from "components/EarthViewer";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";
import { Cartesian3, Color } from "cesium";
import { CameraFlyTo, Entity } from "resium";
import { parseOperationStatus } from "program/types/OperationStatus";

interface IStationsViewerProps extends IEarthViewerProps {
    stations: GroundStationDataValue[];
    selected: GroundStationDataValue | null;
    onSelect?: (station: GroundStationDataValue) => void;
}

const StationEntity: React.FC<{ station: GroundStationDataValue, selected: boolean, onClick?: () => void }> = ({ station, selected, onClick }) => {

    const status = parseOperationStatus(station.operationStatus);

    return (
        <Entity
            key={station.station_id.toString()}
            name={station.name}
            position={
                Cartesian3.fromDegrees(
                    station.longitude.toNumber(),
                    station.latitude.toNumber()
                )
            }
            point={{
                pixelSize: 10,
                color: status === "active" ? Color.GREEN : status === "maintenance" ? Color.GREY : Color.RED,
            }}
            onClick={onClick}
        />
    );
};

const StationsViewer: React.FC<IStationsViewerProps> = ({ stations, selected, onSelect }) => {

    return (
        <EarthViewer>
            {stations.map(station => (
                <StationEntity
                    key={station.station_id.toString()}
                    station={station}
                    selected={station === selected}
                    onClick={() => onSelect?.(station)}
                />
            ))}
            {selected && (
                <CameraFlyTo
                    destination={
                        Cartesian3.fromDegrees(
                            selected.longitude.toNumber(),
                            selected.latitude.toNumber(),
                            10000000
                        )
                    }
                    duration={0.8}
                />
            )}
        </EarthViewer>
    );
}

export default StationsViewer;