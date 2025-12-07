CREATE DATABASE IF NOT EXISTS GimnasioDB;
USE GimnasioDB;


CREATE TABLE Membresia (
    id_membresia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
    duracion_dias INT NOT NULL CHECK (duracion_dias > 0)
);


CREATE TABLE Cliente (
    id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    telefono VARCHAR(15),
    email VARCHAR(80) UNIQUE,
    fecha_registro DATE NOT NULL DEFAULT (CURRENT_DATE),
    estatus ENUM('Activo','Inactivo') DEFAULT 'Activo',
    id_membresia INT NOT NULL,
    
    FOREIGN KEY (id_membresia) REFERENCES Membresia(id_membresia)
);


CREATE TABLE Pago (
    id_pago INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    fecha_pago DATE NOT NULL DEFAULT (CURRENT_DATE),
    monto DECIMAL(10,2) NOT NULL CHECK (monto > 0),
    fecha_vencimiento DATE NOT NULL,
    metodo_pago ENUM('Efectivo','Tarjeta','Transferencia') NOT NULL,

    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);


CREATE TABLE Empleado (
    id_empleado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    puesto VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL CHECK (salario > 0),
    fecha_contratacion DATE NOT NULL DEFAULT (CURRENT_DATE),
    estatus ENUM('Activo','Inactivo') DEFAULT 'Activo'
);

