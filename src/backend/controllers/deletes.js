import { pool } from "../database.js";

export async function deleteMembresia(idMembresia) {
    const result = await pool
        .promise()
        .query(`CALL deleteMembresia(${idMembresia})`);
    return result;
}

export async function deleteCliente(idCliente) {
    const result = await pool
        .promise()
        .query(`CALL deleteCliente(${idCliente})`);
    return result;
}

export async function deletePago(idPago) {
    const result = await pool.promise().query(`CALL deletePago(${idPago})`);
    return result;
}

export async function deleteEmpleado(idEmpleado) {
    const result = await pool
        .promise()
        .query(`CALL deleteEmpleado(${idEmpleado})`);
    return result;
}
