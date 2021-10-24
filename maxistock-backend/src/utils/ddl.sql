CREATE DATABASE maxistock;
USE maxistock;

CREATE TABLE stock (
            codigo INT NOT NULL AUTO_INCREMENT,
            nombre VARCHAR(255) NOT NULL,
            cantidad INT NOT NULL, 
            precio DECIMAL(7,2) NOT NULL,
            PRIMARY KEY (codigo)
        );
        
CREATE TABLE ventas (
	    codigo INT NOT NULL AUTO_INCREMENT,
            codigo_producto INT NOT NULL ,
            fecha DATETIME NOT NULL,
            cantidad INT NOT NULL,
            constraint venta_mayor_que_cero check (cantidad > 0),
            PRIMARY KEY (codigo)
        );

# correr en mysql workbench para setear ambiente inicial
