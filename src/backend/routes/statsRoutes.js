import express from "express";
import * as statsController from "../controllers/stats.js";

const router = express.Router();

router.get("/clientes/count", async (req, res) => {
    const result = await statsController.countClientes();
    res.send(result);
});

router.get("/ventas", async (req, res) => {
    const result = await statsController.getSales();
    res.send(result);
});

router.get("/empleados/count", async (req, res) => {
    const result = await statsController.countEmpleados();
    res.send(result);
});

export { router as statsRouter };
