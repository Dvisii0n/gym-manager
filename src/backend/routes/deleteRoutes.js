import express from "express";
import * as deleteController from "../controllers/deletes.js";

const router = express.Router();

router.delete("/cliente/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deleteController.deleteCliente(id);
    res.send(result);
});

router.delete("/membresia/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deleteController.deleteMembresia(id);
    res.send(result);
});

router.delete("/pago/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deleteController.deletePago(id);
    res.send(result);
});

router.delete("/empleado/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deleteController.deleteEmpleado(id);
    res.send(result);
});

export { router as deleteRouter };
