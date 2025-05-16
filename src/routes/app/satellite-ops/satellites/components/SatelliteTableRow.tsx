import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";

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

    return (
        <TableRow
            hover
            selected={selected}
            onClick={(e) => onSelect(satellite)}
        >
            <TableCell>
                <Box bgcolor="success.main" width="1em" height="1em" />
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
