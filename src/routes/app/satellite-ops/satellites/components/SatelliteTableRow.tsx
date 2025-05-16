import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BN from "bn.js";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getSatelliteData } from "program/accounts/satellite";
import { SatelliteDataValues } from "../utils/satelliteDataValues";
import { useSatelliteProgram } from "routes/app";

interface ISatelliteTableRowProps {
    noradId: BN;
    selected: boolean;
    onSelect: (item: SatelliteDataValues) => void;
    onMenuClick: (item: SatelliteDataValues, element: HTMLElement) => void;
}

const SatelliteTableRow: React.FC<ISatelliteTableRowProps> = ({
    noradId,
    selected,
    onSelect,
    onMenuClick,
}) => {
    const program = useSatelliteProgram();
    const wallet = useWallet();
    const [satelliteData, setSatelliteData] = useState<SatelliteDataValues>();

    useEffect(() => {
        const fetchSatelliteData = async () => {
            const storeSatelliteData = await getSatelliteData(
                wallet.publicKey!,
                program,
                noradId
            );
            setSatelliteData(storeSatelliteData);
        };

        fetchSatelliteData();
    }, [program.programId, wallet.publicKey]);

    return (
        <TableRow
            hover
            selected={selected}
            onClick={(e) => onSelect(satelliteData!)}
        >
            {satelliteData && (
                <>
                    <TableCell>
                        <Box bgcolor="success.main" width="1em" height="1em" />
                    </TableCell>
                    <TableCell>{satelliteData?.name}</TableCell>
                    <TableCell>{satelliteData?.country}</TableCell>
                    <TableCell>
                        {new Date(
                            satelliteData.launchDate.toNumber()
                        ).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                        <IconButton
                            size="small"
                            onClick={(e) => {
                                onMenuClick(satelliteData!, e.currentTarget);
                                e.stopPropagation();
                            }}
                        >
                            <MoreHorizIcon />
                        </IconButton>
                    </TableCell>
                </>
            )}
        </TableRow>
    );
};

export default SatelliteTableRow;
