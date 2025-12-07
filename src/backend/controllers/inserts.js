import { pool } from "../database.js";

export async function insertCliente(
    nombre,
    apellido,
    telefono,
    email,
    idMembresia
) {
    const result = await pool
        .promise()
        .query(
            `CALL insertCliente('${nombre}', '${apellido}', '${telefono}', '${email}', ${idMembresia})`
        );
    return result;
}

export async function insertMembresia(nombre, precio, dias) {
    const result = await pool
        .promise()
        .query(`CALL insertMembresia('${nombre}', ${precio}, ${dias})`);
    return result;
}

export async function insertPago(
    idCliente,
    monto,
    fechaVencimiento,
    metodoPago
) {
    const result = await pool
        .promise()
        .query(
            `CALL insertPago(${idCliente}, ${monto}, '${fechaVencimiento}', '${metodoPago}')`
        );
    return result;
}

export async function insertEmpleado(nombre, apellido, puesto, salario) {
    const result = await pool
        .promise()
        .query(
            `CALL insertEmpleado('${nombre}', '${apellido}', '${puesto}', ${salario})`
        );
    return result;
}
