import express from "express";
import cors from "cors";
import { pool } from "./database.js";
import { getRowsRouter } from "./routes/getRowsRoutes.js";
import { insertRouter } from "./routes/insertRoutes.js";
import { updateRouter } from "./routes/updateRoutes.js";
import { deleteRouter } from "./routes/deleteRoutes.js";

const port = 3000;
const app = express();

app.use(
    cors({
        origin: "http://127.0.0.1:3001",
    })
);
app.use(express.json());
app.use("/getRows", getRowsRouter);
app.use("/insert", insertRouter);
app.use("/update", updateRouter);
app.use("/delete", deleteRouter);

pool.connect();

app.listen(port, () => {
    console.log(`Conectado en el puerto ${3000}`);
});
