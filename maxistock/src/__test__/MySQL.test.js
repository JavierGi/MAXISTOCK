import { connect, query, disconnect } from '../dao/MySQLDAO';

const dbTestName = 'maxistock_test';

beforeAll(() => {
    connect();
    query(`CREATE DATABASE ${dbTestName}`);
    query(`USE ${dbTestName}`);
});

beforeEach(() => {
    query(`
        CREATE TABLE Stock (
            codigo INT NOT NULL,
            nombre VARCHAR(255) NOT NULL,
            cantidad INT NOT NULL, 
            precio DECIMAL(7,2) NOT NULL
        );
    `);
    query(`
        CREATE TABLE Ventas (
            codigo INT NOT NULL,
            fecha DATETIME NOT NULL,
            cantidad INT NOT NULL,
            constraint venta_mayor_que_cero check (cantidad > 0)
        );
    `);
});

afterEach(() => {
    query(`
        DROP TABLE Stock, Ventas;
    `);
});

afterAll(() => {
    query(`DROP DATABASE ${dbTestName}`);
    disconnect();
});

test('maxistock Database exists', () => {
    return query(`
        SELECT SCHEMA_NAME 
        FROM INFORMATION_SCHEMA.SCHEMATA 
        WHERE SCHEMA_NAME = "${dbTestName}"
        `
    ).then(res => {
        expect(res).toMatchObject([{SCHEMA_NAME: dbTestName}]);
    });
});

test('Stock table is empty', () => {
    return query(`
        SELECT * FROM Stock;
    `).then(res => {
        expect(res).toStrictEqual([]);
    });
});

test('insert a item', () => {
    query(`
        INSERT INTO Stock (codigo, nombre, cantidad, precio)
        VALUES (1, "Cosa", 0 , 0.0);
    `);
    return query(`
        SELECT * FROM Stock;
    `).then(res => {
        expect(res).toMatchObject([{codigo: 1, nombre: "Cosa", cantidad: 0, precio: 0.0}]);
    });
});

test('insert into ventas', () => {
    insertRowsOnVentas();

    return query(`
        SELECT * FROM Ventas;
    `).then(res => {
        expect(res).toMatchObject([
            {codigo: 1001,  cantidad: 1, }, 
            {codigo: 1002,  cantidad: 2, }, 
            {codigo: 1002,  cantidad: 1, }, 
        ]);
    });
});

const insertRowsOnStock = () => {
    query(`
        INSERT INTO Stock(codigo, nombre, cantidad, precio)
        VALUES
        (1001, "Cosa1", 1, 10.0),
        (1002, "Cosa2", 1, 20.0),
        (1003, "Cosa3", 1, 30.0);
    `);
}

const insertRowsOnVentas = () => {
    query(`
        INSERT INTO Ventas(codigo, fecha, cantidad)
        VALUES
        (1001, '2000-01-01 00:00:01', 1),
        (1002, '2000-01-01 00:00:03', 2),
        (1002, '2000-01-01 00:00:06', 1);
    `);
}

test('get more sold', () => {
    insertRowsOnStock();
    insertRowsOnVentas();

    return query(`
         SELECT Ventas.codigo, Stock.nombre, sum(Ventas.cantidad) AS cant
         FROM Ventas
         JOIN Stock
         WHERE Ventas.codigo = Stock.codigo
         GROUP BY Ventas.codigo, Stock.nombre
         ORDER BY cant DESC;
    `).then(res => {
        expect(res).toMatchObject([
            {codigo: 1002, cant: 3, nombre: 'Cosa2'}, 
            {codigo: 1001, cant: 1, nombre: 'Cosa1'},
        ]);
    });

});

test('We can SELECT', () => {
    return query('SELECT 7 * 3 * 2 AS verdad').then(res => {
        expect(res).toMatchObject([{verdad: 42}]);
    });

});
