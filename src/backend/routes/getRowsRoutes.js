import express from "express";
import { getRows } from "../controllers/getRows.js";

const router = express.Router();

router.get("/:tabla", async (req, res) => {
    const result = await getRows(req.params.tabla);
    res.send(result);
});

export { router as getRowsRouter };
