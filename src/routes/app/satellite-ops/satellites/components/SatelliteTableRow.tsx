import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { TableDemoData } from "../utils/tableDemoData";

interface ISatelliteTableRowProps {
    data: TableDemoData;
    selected: boolean;
    onSelect: (item: TableDemoData) => void;
    onMenuClick: (item: TableDemoData, element: HTMLElement) => void;
}

const SatelliteTableRow: React.FC<ISatelliteTableRowProps> = ({ data, selected, onSelect, onMenuClick }) => (
    <TableRow hover selected={selected} onClick={(e) => onSelect(data)}>
        <TableCell>
            <Box bgcolor="success.main" width="1em" height="1em" />
        </TableCell>
        <TableCell>
            {data.name}
        </TableCell>
        <TableCell>
            {data.transmissions}
        </TableCell>
        <TableCell>
            {data.added}
        </TableCell>
        <TableCell>
            <IconButton size="small" onClick={(e) => { onMenuClick(data, e.currentTarget); e.stopPropagation(); }}>
                <MoreHorizIcon />
            </IconButton>
        </TableCell>
    </TableRow>
);

export default SatelliteTableRow;