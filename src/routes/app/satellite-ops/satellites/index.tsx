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
import { useEffect, useState } from "react";
import { tableDemoData } from "./utils/tableDemoData";
import SatelliteTableRow from "./components/SatelliteTableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ClickAwayListener } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSatelliteProgram } from "program/program-data-access";
import BN from "bn.js";
import { getSatelliteOwnerData } from "program/accounts/satelliteOwner";
import { SatelliteDataValues } from "./utils/satelliteDataValues";
import SatelliteDataBoard from "./components/SatelliteDataBoard";
import { ISatellite } from "./components/SatellitesViewer";
import SatellitesViewer from "./components/SatellitesViewer";
import { ManeuverTypes, OperationStatus } from "./utils/RegistrationUtils";

const SatellitesTable = styled(Table)({
    "th:first-child, td:first-child": {
        width: 56,
    },
    "th:last-child, td:last-child": {
        width: 56,
    },
});

const satellite: ISatellite = {
    owner: "Space Y",
    name: "Space Y 69420",
    country: "US",
    noradId: "69420",
    launchDate: new Date(),
    mintDate: new Date(),
    inclination: 55,
    altitude: 35786000,
    maneuverType: ManeuverTypes.InclinationChange,
    operationStatus: OperationStatus.Active,
    semiMajorAxis: 42164000,
};

const Satellites: React.FC = () => {
    const [tablePageSize, setTablePageSize] = useState(10);
    const tableData = tableDemoData.slice(0, tablePageSize);
    const [satelliteNoradIds, setSatelliteNoradIds] = useState<BN[]>([]);
    const [selectedItem, setSelectedItem] =
        useState<SatelliteDataValues | null>(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState<
        [id: number, element: HTMLElement] | null
    >(null);
    const wallet = useWallet();
    const { program } = useSatelliteProgram();

    const onTableItemClick = (item: SatelliteDataValues) => {
        setSelectedItem(item);
    };

    const onTableItemMenuClick = (
        item: SatelliteDataValues,
        element: HTMLElement
    ) => {
        setSelectedMenuItem([item.noradId.toNumber(), element]);
        setSelectedItem(item);
    };

    useEffect(() => {
        const storeSatelliteNoradId = async () => {
            const { satellites } = await getSatelliteOwnerData(
                wallet.publicKey!,
                program
            );

            setSatelliteNoradIds(satellites.map((id) => new BN(id)));
        };

        storeSatelliteNoradId();
    }, [program.programId, wallet.publicKey]);

    return (
        <>
            <Typography variant="h3" marginBottom={3}>
                Fleet
            </Typography>
            <AppContentGrid sx={{ gridAutoRows: "400px" }}>
                {selectedItem?.noradId ? (
                    <SatelliteDataBoard noradId={selectedItem.noradId} />
                ) : (
                    <DashboardCard>
                        <CardHeader title="Fleet" subheader="0/0 active" />
                        <CardContent>
                            {/* TODO: contribution-type graph */}
                        </CardContent>
                        <CardActions>
                            <DashboardCardButton component={Link} to="/app/satellite-ops/register">
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
                    <SatellitesViewer satellites={[satellite]} />
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
                                    <TableCell>Country</TableCell>
                                    <TableCell>Added</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {satelliteNoradIds.map((id, index) => (
                                    <SatelliteTableRow
                                        key={index}
                                        selected={
                                            !!selectedItem &&
                                            id &&
                                            selectedItem.noradId.eq(id)
                                        }
                                        noradId={id}
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
                    onPageChange={() => {}}
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
