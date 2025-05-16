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
import StationTableRow from "./components/StationTableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BN from "bn.js";
import StationDataBoard from "./components/StationDataBoard";
import StationsViewer from "./components/StationsViewer";
import useUserGroundStations from "../hooks/useUserGroundStations";
import { useShowSnackbar } from "components/SnackbarProvider";
import { GroundStationDataValue } from "program/types/GroundStationDataValue";

const StationsTableElement = styled(Table)({
    "th:first-child, td:first-child": {
        width: 56,
    },
    "th:last-child, td:last-child": {
        width: 56,
    },
});

const Stations: React.FC = () => {
    const showSnackbar = useShowSnackbar();

    const { groundStations, removeGroundStation } = useUserGroundStations();
    const [selectedStation, setSelectedStation] =
        useState<GroundStationDataValue | null>(null);

    const [tablePageSize, setTablePageSize] = useState(10);
    const [selectedMenuItem, setSelectedMenuItem] = useState<
        [id: string, element: HTMLElement] | null
    >(null);

    const onTableItemClick = (station: GroundStationDataValue) => {
        setSelectedStation(station === selectedStation ? null : station);
    };

    const onTableItemMenuClick = (
        station: GroundStationDataValue,
        element: HTMLElement
    ) => {
        setSelectedMenuItem([station.stationId.toString(), element]);
        setSelectedStation(station);
    };

    const onStationRemoved = (stationId: BN) => {
        removeGroundStation(stationId);
        showSnackbar("Station removed");
    };

    const activeCount = groundStations.filter(
        (station) => !!station.operationStatus.active
    ).length;

    return (
        <>
            <Typography variant="h3" marginBottom={3}>
                Stations
            </Typography>
            <AppContentGrid sx={{ gridAutoRows: "400px" }}>
                {selectedStation?.stationId ? (
                    <StationDataBoard
                        station={selectedStation}
                        onStationRemoved={onStationRemoved}
                    />
                ) : (
                    <DashboardCard>
                        <CardHeader
                            title="Stations"
                            subheader={`${activeCount}/${groundStations.length} active`}
                        />
                        <CardContent>
                            {/* TODO: contribution-type graph */}
                        </CardContent>
                        <CardActions>
                            <DashboardCardButton
                                component={Link}
                                to="/app/ground-station-ops/stations/register"
                            >
                                Register
                            </DashboardCardButton>
                        </CardActions>
                    </DashboardCard>
                )}

                <Paper
                    sx={{
                        position: "relative",
                        backgroundColor: "rgb(0, 0, 0)",
                        gridColumn: { xs: "span 1", sm: "2 / -1" },
                        gridRow: "1 / -1",
                        height: "100%",
                    }}
                >
                    <StationsViewer
                        stations={groundStations}
                        selected={selectedStation}
                        onSelect={onTableItemClick}
                    />
                </Paper>
            </AppContentGrid>
            <Paper variant="outlined" sx={{ marginTop: 3 }}>
                <TableContainer>
                    <StationsTableElement size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Name</TableCell>
                                <TableCell>Frequency</TableCell>
                                <TableCell>Cost per MB</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groundStations.map((station, index) => (
                                <StationTableRow
                                    key={index}
                                    station={station}
                                    selected={station === selectedStation}
                                    onSelect={onTableItemClick}
                                    onMenuClick={onTableItemMenuClick}
                                />
                            ))}
                        </TableBody>
                    </StationsTableElement>
                </TableContainer>
                <TablePagination
                    size="small"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={groundStations.length}
                    rowsPerPage={tablePageSize}
                    page={0}
                    onPageChange={() => { }}
                    onRowsPerPageChange={(r) =>
                        setTablePageSize(+r.target.value)
                    }
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

export default Stations;
