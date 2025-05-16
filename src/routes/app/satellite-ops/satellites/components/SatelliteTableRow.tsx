import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";
import getOperationStatusColor from "utils/getOperationStatusColor";
import { parseOperationStatus } from "program/types/OperationStatus";

interface ISatelliteTableRowProps {
    satellite: SatelliteDataValues;
    selected: boolean;
    onSelect: (item: SatelliteDataValues) => void;
    onMenuClick: (item: SatelliteDataValues, element: HTMLElement) => void;
}

const SatelliteTableRow: React.FC<ISatelliteTableRowProps> = ({
    satellite,
    selected,
    onSelect,
    onMenuClick,
}) => {

    const [r, g, b, a] = getOperationStatusColor(parseOperationStatus(satellite.operationStatus));

    return (
        <TableRow
            hover
            selected={selected}
            onClick={(e) => onSelect(satellite)}
        >
            <TableCell>
                <Box bgcolor={`rgba(${r}, ${g}, ${b}, ${a})`} width="1em" height="1em" />
            </TableCell>
            <TableCell>{satellite.name}</TableCell>
            <TableCell>{satellite.country}</TableCell>
            <TableCell>
                {new Date(
                    satellite.launchDate.toNumber()
                ).toLocaleDateString()}
            </TableCell>
            <TableCell>
                <IconButton
                    size="small"
                    onClick={(e) => {
                        onMenuClick(satellite, e.currentTarget);
                        e.stopPropagation();
                    }}
                >
                    <MoreHorizIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default SatelliteTableRow;
