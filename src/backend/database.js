import mysql from "mysql2";

export const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "GimnasioDB",
});
