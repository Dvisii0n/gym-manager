import { pool } from "../database.js";

export async function getRows(tabla) {
    const result = await pool.promise().query(`CALL getRows('${tabla}')`);
    return result;
}
