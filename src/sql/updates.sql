USE GimnasioDB;

DELIMITER $$

CREATE PROCEDURE updateMembresia(
    IN p_id_membresia INT,
    IN p_tipo VARCHAR(50),
    IN p_precio DECIMAL(10,2),
    IN p_duracion_dias INT
)
BEGIN
    UPDATE Membresia
    SET 
        tipo = p_tipo,
        precio = p_precio,
        duracion_dias = p_duracion_dias
    WHERE id_membresia = p_id_membresia;
END$$

CREATE PROCEDURE updateCliente(
    IN p_id_cliente INT,
    IN p_nombre VARCHAR(60),
    IN p_apellido VARCHAR(60),
    IN p_telefono VARCHAR(15),
    IN p_email VARCHAR(80),
    IN p_fecha_registro DATE,
    IN p_estatus ENUM('Activo','Inactivo'),
    IN p_id_membresia INT
)
BEGIN
    UPDATE Cliente
    SET
        nombre = p_nombre,
        apellido = p_apellido,
        telefono = p_telefono,
        email = p_email,
        fecha_registro = p_fecha_registro,
        estatus = p_estatus,
        id_membresia = p_id_membresia
    WHERE id_cliente = p_id_cliente;
END$$

CREATE PROCEDURE updatePago(
    IN p_id_pago INT,
    IN p_id_cliente INT,
    IN p_fecha_pago DATE,
    IN p_monto DECIMAL(10,2),
    IN p_fecha_vencimiento DATE,
    IN p_metodo_pago ENUM('Efectivo','Tarjeta','Transferencia')
)
BEGIN
    UPDATE Pago
    SET
        id_cliente = p_id_cliente,
        fecha_pago = p_fecha_pago,
        monto = p_monto,
        fecha_vencimiento = p_fecha_vencimiento,
        metodo_pago = p_metodo_pago
    WHERE id_pago = p_id_pago;
END$$

CREATE PROCEDURE updateEmpleado(
    IN p_id_empleado INT,
    IN p_nombre VARCHAR(60),
    IN p_apellido VARCHAR(60),
    IN p_puesto VARCHAR(50),
    IN p_salario DECIMAL(10,2),
    IN p_fecha_contratacion DATE,
    IN p_estatus ENUM('Activo','Inactivo')
)
BEGIN
    UPDATE Empleado
    SET
        nombre = p_nombre,
        apellido = p_apellido,
        puesto = p_puesto,
        salario = p_salario,
        fecha_contratacion = p_fecha_contratacion,
        estatus = p_estatus
    WHERE id_empleado = p_id_empleado;
END$$

DELIMITER ;

