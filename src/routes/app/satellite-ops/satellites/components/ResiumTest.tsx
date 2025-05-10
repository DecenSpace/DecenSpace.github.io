import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";

// Cesium docs said there were issues with import the styles like this but I couldn't find any.
// Maybe just related to webpack or vite based setups.
import "cesium/Build/Cesium/Widgets/widgets.css";

/**
 * TODO: just for testing. Replace this component later
 */
const ResiumTest: React.FC = () => {

    const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
    const pointGraphics = { pixelSize: 10 };

    return (
        <Viewer style={{ width: "100%", height: "100%" }}>
            <Entity position={position} point={pointGraphics} />
        </Viewer>
    );
};

export default ResiumTest;