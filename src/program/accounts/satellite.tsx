import { Connection, PublicKey } from "@solana/web3.js";

const satelliteData = async (
    connection: Connection,
    satellitePda: PublicKey
) => {
    const data = await connection.getParsedAccountInfo(satellitePda);

    return { data };
};

export default satelliteData;
