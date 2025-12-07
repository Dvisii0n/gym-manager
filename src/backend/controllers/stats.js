import { pool } from "../database.js";

export async function countClientes() {
    const result = await pool.promise().query(`CALL countClientes()`);
    return result;
}

export async function getSales() {
    const result = await pool.promise().query(`CALL getSales()`);
    return result;
}

export async function countEmpleados() {
    const result = await pool.promise().query(`CALL countEmpleados()`);
    return result;
}
