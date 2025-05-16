import EarthViewer, { IEarthViewerProps } from "components/EarthViewer";
import { Color } from "cesium";
import getOperationStatusColor from "utils/getOperationStatusColor";
import { OperationStatus } from "program/types/OperationStatus";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";

const StationEntity: React.FC<{ station: GroundStationDataValue, selected: boolean }> = ({ station, selected }) => {

    const [r, g, b, a] = getOperationStatusColor(
        Object.keys(station.operationStatus)[0] as OperationStatus,
        selected
    );

    const color = new Color(r, g, b, a);

    return (
        null // TODO: 
    );
};

interface IStationsViewerProps extends IEarthViewerProps {
    stations: GroundStationDataValue[];
    selectedStation?: GroundStationDataValue | null;
    fullWidthAndHeight?: boolean;
}

const StationsViewer: React.FC<IStationsViewerProps> = ({
    stations,
    selectedStation,
    fullWidthAndHeight = true,
    ...props
}) => {

    return (
        <EarthViewer {...props}>
            {stations?.map(station => (
                <StationEntity
                    key={station.station_id.toString()}
                    station={station}
                    selected={station === selectedStation}
                />
            ))}
        </EarthViewer>
    );
};

export default StationsViewer;