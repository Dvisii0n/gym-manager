import express from "express";
import * as updateController from "../controllers/updates.js";

const router = express.Router();

router.put("/cliente/:id", async (req, res) => {
    const body = req.body;
    const result = await updateController.updateCliente(
        req.params.id,
        body.nombre,
        body.apellido,
        body.telefono,
        body.email,
        body.fechaRegistro,
        body.estatus,
        body.idMembresia
    );
    res.send(result);
});

router.put("/membresia/:id", async (req, res) => {
    const body = req.body;
    const result = await updateController.updateMembresia(
        req.params.id,
        body.tipo,
        body.precio,
        body.duracionDias
    );

    res.send(result);
});

router.put("/pago/:id", async (req, res) => {
    const body = req.body;
    const result = await updateController.updatePago(
        req.params.id,
        body.idCliente,
        body.fechaPago,
        body.monto,
        body.fechaVencimiento,
        body.metodoPago
    );

    res.send(result);
});

router.put("/empleado/:id", async (req, res) => {
    const body = req.body;
    const result = await updateController.updateEmpleado(
        req.params.id,
        body.nombre,
        body.apellido,
        body.puesto,
        body.salario,
        body.fechaContratacion,
        body.estatus
    );

    res.send(result);
});

export { router as updateRouter };
