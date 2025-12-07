USE GimnasioDB;
DELIMITER $$

CREATE PROCEDURE countClientes()
BEGIN
    SELECT COUNT(*) AS num FROM Cliente;
END$$

CREATE PROCEDURE getSales()
BEGIN
    SELECT SUM(monto) AS ventas FROM Pago;
END$$

CREATE PROCEDURE countEmpleados()
BEGIN
    SELECT COUNT(*) AS num FROM Empleado;
END$$

DELIMITER ;
