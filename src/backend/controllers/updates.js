import { pool } from "../database.js";

export async function updateMembresia(idMembresia, tipo, precio, duracionDias) {
    const result = await pool
        .promise()
        .query(
            `CALL updateMembresia(${idMembresia}, '${tipo}', ${precio}, ${duracionDias})`
        );
    return result;
}

export async function updateCliente(
    idCliente,
    nombre,
    apellido,
    telefono,
    email,
    fechaRegistro,
    estatus,
    idMembresia
) {
    const result = await pool
        .promise()
        .query(
            `CALL updateCliente(${idCliente}, '${nombre}', '${apellido}', '${telefono}', '${email}', '${fechaRegistro}', '${estatus}', ${idMembresia})`
        );
    return result;
}

export async function updatePago(
    idPago,
    idCliente,
    fechaPago,
    monto,
    fechaVencimiento,
    metodoPago
) {
    const result = await pool
        .promise()
        .query(
            `CALL updatePago(${idPago}, ${idCliente}, '${fechaPago}', ${monto}, '${fechaVencimiento}', '${metodoPago}')`
        );
    return result;
}

export async function updateEmpleado(
    idEmpleado,
    nombre,
    apellido,
    puesto,
    salario,
    fechaContratacion,
    estatus
) {
    const result = await pool
        .promise()
        .query(
            `CALL updateEmpleado(${idEmpleado}, '${nombre}', '${apellido}', '${puesto}', ${salario}, '${fechaContratacion}', '${estatus}')`
        );
    return result;
}
