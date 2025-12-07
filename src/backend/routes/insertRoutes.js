import express from "express";
import * as insertController from "../controllers/inserts.js";

const router = express.Router();

router.post("/cliente", async (req, res) => {
    const body = req.body;
    const result = await insertController.insertCliente(
        body.nombre,
        body.apellido,
        body.telefono,
        body.email,
        body.idMembresia
    );
    res.send(result);
});

router.post("/membresia", async (req, res) => {
    const body = req.body;
    const result = await insertController.insertMembresia(
        body.nombre,
        body.precio,
        body.dias
    );
    res.send(result);
});

router.post("/pago", async (req, res) => {
    const body = req.body;
    const result = await insertController.insertPago(
        body.idCliente,
        body.monto,
        body.fechaVencimiento,
        body.metodoPago
    );
    res.send(result);
});

router.post("/empleado", async (req, res) => {
    const body = req.body;
    const result = await insertController.insertEmpleado(
        body.nombre,
        body.apellido,
        body.puesto,
        body.salario
    );
    res.send(result);
});

export { router as insertRouter };
