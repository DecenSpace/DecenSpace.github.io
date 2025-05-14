import { ImageryLayer, Viewer, ViewerProps } from "resium";
import { Ion, Rectangle, SingleTileImageryProvider } from "cesium";
import { useMemo } from "react";

// Cesium docs said there were issues with import the styles like this but I couldn't find any.
// Maybe just related to webpack or vite based setups.
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken = "";

export interface IEarthViewerProps extends ViewerProps {
    satellites?: any[];
    selectedSatelliteId?: string;
    fullWidthAndHeight?: boolean;
}

const EarthViewer: React.FC<IEarthViewerProps> = ({
    satellites,
    selectedSatelliteId,
    fullWidthAndHeight = true,
    style,
    children,
    ...props
}) => {

    const imageryProvider = useMemo(() => new SingleTileImageryProvider({
        url: "/assets/map-data/natural-earth-2.jpg",
        rectangle: Rectangle.fromDegrees(-180, -90, 180, 90),
        tileWidth: 1008,
        tileHeight: 504
    }), []);

    let viewerStyle = { ...style };

    if (fullWidthAndHeight) {
        viewerStyle.width = "100%";
        viewerStyle.height = "100%";
    }

    return (
        <Viewer
            style={viewerStyle}
            timeline={false}
            animation={false}
            navigationHelpButton={false}
            homeButton={false}
            sceneModePicker={false}
            baseLayerPicker={false}
            geocoder={false}
            fullscreenButton={false}
            infoBox={false}
            selectionIndicator={false}
            {...props}
        >
            <ImageryLayer imageryProvider={imageryProvider} />
            {children}
        </Viewer>
    );
};

export default EarthViewer;