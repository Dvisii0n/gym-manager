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
        body.id_membresia
    );
    res.send(result);
});

router.post("/membresia", async (req, res) => {
    const body = req.body;
    const result = await insertController.insertMembresia(
        body.tipo,
        body.precio,
        body.duracion_dias
    );
    res.send(result);
});

router.post("/pago", async (req, res) => {
    const body = req.body;
    const result = await insertController.insertPago(
        body.id_cliente,
        body.monto,
        body.fecha_vencimiento,
        body.metodo_pago
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
