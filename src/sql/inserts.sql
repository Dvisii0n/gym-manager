USE GimnasioDB;

DELIMITER $$

CREATE PROCEDURE insertMembresia(
    IN p_tipo VARCHAR(100),
    IN p_precio DECIMAL(10,2),
    IN p_duracion_dias INT
)
BEGIN
    INSERT INTO Membresia (tipo, precio, duracion_dias)
    VALUES (p_tipo, p_precio, p_duracion_dias);
END$$


CREATE PROCEDURE insertCliente(
    IN p_nombre VARCHAR(60),
    IN p_apellido VARCHAR(60),
    IN p_telefono VARCHAR(20),
    IN p_email VARCHAR(120),
    IN p_id_membresia INT
)
BEGIN
    INSERT INTO Cliente (nombre, apellido, telefono, email, id_membresia)
    VALUES (p_nombre, p_apellido, p_telefono, p_email, p_id_membresia);
END$$


CREATE PROCEDURE insertPago(
    IN p_id_cliente INT,
    IN p_monto DECIMAL(12,2),
    IN p_fecha_vencimiento DATE,
    IN p_metodo_pago VARCHAR(50)
)
BEGIN
    INSERT INTO Pago (id_cliente, monto, fecha_vencimiento, metodo_pago)
    VALUES (p_id_cliente, p_monto, p_fecha_vencimiento, p_metodo_pago);
END$$


CREATE PROCEDURE insertEmpleado(
    IN p_nombre VARCHAR(60),
    IN p_apellido VARCHAR(60),
    IN p_puesto VARCHAR(80),
    IN p_salario DECIMAL(10,2)
)
BEGIN
    INSERT INTO Empleado (nombre, apellido, puesto, salario)
    VALUES (p_nombre, p_apellido, p_puesto, p_salario);
END$$

DELIMITER ;