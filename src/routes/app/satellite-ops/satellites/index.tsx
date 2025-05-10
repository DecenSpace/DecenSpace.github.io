import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AppContentGrid from "routes/app/components/AppContentGrid";
import DashboardCard from "routes/app/components/DashboardCard";
import DashboardCardButton from "routes/app/components/DashboardCardButton";
import { useState } from "react";
import { TableDemoData, tableDemoData } from "./utils/tableDemoData";
import SatelliteTableRow from "./components/SatelliteTableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ClickAwayListener } from "@mui/material";

const SatellitesTable = styled(Table)({
    "th:first-child, td:first-child": {
        width: 56
    },
    "th:last-child, td:last-child": {
        width: 56
    }
});

const Satellites: React.FC = () => {

    const [tablePageSize, setTablePageSize] = useState(10);

    const tableData = tableDemoData.slice(0, tablePageSize);

    const [selectedItem, setSelectedItem] = useState<TableDemoData | null>(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState<[id: string, element: HTMLElement] | null>(null);

    const onTableItemClick = (item: TableDemoData) => {
        setSelectedItem(item);
    };

    const onTableItemMenuClick = (item: TableDemoData, element: HTMLElement) => {

        setSelectedMenuItem([item.id, element]);
        setSelectedItem(item);
    };

    return (
        <>
            <Typography variant="h3" marginBottom={3}>
                Fleet
            </Typography>
            <AppContentGrid sx={{ gridAutoRows: "400px" }}>
                {selectedItem ? (
                    <DashboardCard variant="outlined">
                        <CardHeader title={selectedItem.name} subheader="Selected satellite" />
                        {/* <CardContent>
                            <Typography variant="body2">Name: {selectedItem.name}</Typography>
                            <Typography variant="body2">Date added: {selectedItem.added}</Typography>
                        </CardContent> */}
                        <List dense disablePadding>
                            <ListItem>
                                <ListItemText primary="Name" secondary={selectedItem.name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Added" secondary={selectedItem.added} />
                            </ListItem>
                        </List>
                    </DashboardCard>
                ) : (
                    <DashboardCard>
                        <CardHeader title="Fleet" subheader="0/0 active" />
                        <CardContent>
                            {/* TODO: contribution-type graph */}
                        </CardContent>
                        <CardActions>
                            <DashboardCardButton component={Link} to="/app/satellite-ops/register-satellite">
                                Register
                            </DashboardCardButton>
                        </CardActions>
                    </DashboardCard>
                )}
                <Paper sx={{ backgroundColor: "rgb(0, 0, 0)", gridColumn: { xs: "span 1", sm: "2 / -1" }, gridRow: "1 / -1", height: "100%" }}>
                    {/* TODO: super cool 3d earth */}
                </Paper>
            </AppContentGrid>
            <Paper variant="outlined" sx={{ marginTop: 3 }}>
                <ClickAwayListener onClickAway={() => setSelectedItem(null)}>
                    <TableContainer>
                        <SatellitesTable size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Name</TableCell>
                                    <TableCell>Transmissions</TableCell>
                                    <TableCell>Added</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map(data => (
                                    <SatelliteTableRow
                                        key={data.id}
                                        data={data}
                                        selected={selectedItem === data}
                                        onSelect={onTableItemClick}
                                        onMenuClick={onTableItemMenuClick}
                                    />
                                ))}
                            </TableBody>
                        </SatellitesTable>
                    </TableContainer>
                </ClickAwayListener>
                <TablePagination
                    size="small"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={tableDemoData.length}
                    rowsPerPage={tablePageSize}
                    page={0}
                    onPageChange={() => { }}
                    onRowsPerPageChange={r => setTablePageSize(+r.target.value)}
                />
                <Menu
                    open={!!selectedMenuItem}
                    onClose={() => setSelectedMenuItem(null)}
                    anchorEl={selectedMenuItem?.[1]}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <MenuItem>Edit details</MenuItem>
                    <MenuItem>Set inactive</MenuItem>
                </Menu>
            </Paper>
        </>
    );
};

export default Satellites;