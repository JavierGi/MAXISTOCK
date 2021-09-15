import { connect, query, disconnect } from './MySQLDAO';

const dbTestName = 'maxistock';

beforeAll(() => {
    connect();
    query(`CREATE DATABASE ${dbTestName}`);
    query(`USE maxistock`);
});

beforeEach(() => {
    query(`
        CREATE TABLE items (
            id int,
            nombre varchar(255),
            cantidad int
        );
    `);
});

afterEach(() => {
    query(`
        DROP TABLE items;
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

test('items table is empty', () => {
    return query(`
        SELECT * FROM items;
    `).then(res => {
        expect(res).toStrictEqual([]);
    });
});

test('insert a item', () => {
    query(`
        INSERT INTO items (id, nombre, cantidad)
        VALUES (1, "Cosa", 0);
    `);
    return query(`
        SELECT * FROM items;
    `).then(res => {
        expect(res).toMatchObject([{id: 1, nombre: "Cosa", cantidad: 0}]);
    });
});

test('We can SELECT', () => {
    return query('SELECT 7 * 3 * 2 AS verdad').then(res => {
        expect(res).toMatchObject([{verdad: 42}]);
    });

});
