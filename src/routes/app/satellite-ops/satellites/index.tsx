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
import SatelliteTableRow from "./components/SatelliteTableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SatelliteDataBoard from "./components/SatelliteDataBoard";
import SatellitesViewer from "./components/SatellitesViewer";
import useUsersSatellites from "./hooks/useUsersSatellites";
import { SatelliteDataValues } from "program/types/SatelliteDataValues";
import BN from "bn.js";
import { useShowSnackbar } from "components/SnackbarProvider";

const SatellitesTableElement = styled(Table)({
    "th:first-child, td:first-child": {
        width: 56,
    },
    "th:last-child, td:last-child": {
        width: 56,
    },
});

const Satellites: React.FC = () => {

    const showSnackbar = useShowSnackbar();

    const { satellites, removeSatellite } = useUsersSatellites();
    const [selectedSatellite, setSelectedSatellite] = useState<SatelliteDataValues | null>(null);

    const [tablePageSize, setTablePageSize] = useState(10);
    const [selectedMenuItem, setSelectedMenuItem] = useState<[id: string, element: HTMLElement] | null>(null);

    const onTableItemClick = (satellite: SatelliteDataValues) => {
        setSelectedSatellite(satellite === selectedSatellite ? null : satellite);
    };

    const onTableItemMenuClick = (
        satellite: SatelliteDataValues,
        element: HTMLElement
    ) => {
        setSelectedMenuItem([satellite.noradId.toString(), element]);
        setSelectedSatellite(satellite);
    };

    const onSatelliteRemoved = (noradId: BN) => {
        removeSatellite(noradId);
        showSnackbar("Satellite removed");
    };

    return (
        <>
            <Typography variant="h3" marginBottom={3}>
                Fleet
            </Typography>
            <AppContentGrid sx={{ gridAutoRows: "400px" }}>
                {selectedSatellite?.noradId ? (
                    <SatelliteDataBoard
                        noradId={selectedSatellite.noradId}
                        onSatelliteRemoved={onSatelliteRemoved} />
                ) : (
                    <DashboardCard>
                        <CardHeader title="Fleet" subheader="0/0 active" />
                        <CardContent>
                            {/* TODO: contribution-type graph */}
                        </CardContent>
                        <CardActions>
                            <DashboardCardButton
                                component={Link}
                                to="/app/satellite-ops/register-satellite"
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
                    <SatellitesViewer
                        satellites={satellites}
                        selectedSatellite={selectedSatellite}
                    />
                </Paper>
            </AppContentGrid>
            <Paper variant="outlined" sx={{ marginTop: 3 }}>
                <TableContainer>
                    <SatellitesTableElement size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Name</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>Added</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {satellites.map((satellite, index) => (
                                <SatelliteTableRow
                                    key={index}
                                    satellite={satellite}
                                    selected={satellite === selectedSatellite}
                                    onSelect={onTableItemClick}
                                    onMenuClick={onTableItemMenuClick}
                                />
                            ))}
                        </TableBody>
                    </SatellitesTableElement>
                </TableContainer>
                <TablePagination
                    size="small"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={satellites.length}
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

export default Satellites;
