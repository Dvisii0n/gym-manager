USE GimnasioDB;

DELIMITER $$

CREATE PROCEDURE deleteMembresia(
    IN p_id_membresia INT
)

BEGIN
    DELETE FROM Membresia
    WHERE id_membresia = p_id_membresia;
END$$


CREATE PROCEDURE deleteCliente(
    IN p_id_cliente INT
)
BEGIN
	UPDATE Cliente SET id_membresia = NULL
    WHERE id_cliente = p_id_cliente;
    
	DELETE FROM Pago
    WHERE id_cliente = p_id_cliente;
    
    DELETE FROM Cliente
    WHERE id_cliente = p_id_cliente;
END$$

CREATE PROCEDURE deletePago(
    IN p_id_pago INT
)
BEGIN
    DELETE FROM Pago
    WHERE id_pago = p_id_pago;
END$$

CREATE PROCEDURE deleteEmpleado(
    IN p_id_empleado INT
)
BEGIN
    DELETE FROM Empleado
    WHERE id_empleado = p_id_empleado;
END$$

DELIMITER ;