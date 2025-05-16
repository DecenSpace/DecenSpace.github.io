import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";
import getOperationStatusColor from "utils/getOperationStatusColor";
import { parseOperationStatus } from "program/types/OperationStatus";
import { parseFrequencyType } from "program/types/FrequencyType";

const priceFormatter = new Intl.NumberFormat(undefined, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

interface IStationTableRowProps {
    station: GroundStationDataValue;
    selected: boolean;
    onSelect: (item: GroundStationDataValue) => void;
    onMenuClick: (item: GroundStationDataValue, element: HTMLElement) => void;
}

const StationTableRow: React.FC<IStationTableRowProps> = ({
    station,
    selected,
    onSelect,
    onMenuClick,
}) => {

    const [r, g, b, a] = getOperationStatusColor(parseOperationStatus(station.operationStatus));

    return (
        <TableRow
            hover
            selected={selected}
            onClick={(e) => onSelect(station)}
        >
            <TableCell>
                <Box bgcolor={`rgba(${r}, ${g}, ${b}, ${a})`} width="1em" height="1em" />
            </TableCell>
            <TableCell>{station.name}</TableCell>
            <TableCell>{parseFrequencyType(station.frequency_type)}</TableCell>
            <TableCell>{priceFormatter.format(station.cost_per_mb)}</TableCell>
            <TableCell>
                <IconButton
                    size="small"
                    onClick={(e) => {
                        onMenuClick(station, e.currentTarget);
                        e.stopPropagation();
                    }}
                >
                    <MoreHorizIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default StationTableRow;
