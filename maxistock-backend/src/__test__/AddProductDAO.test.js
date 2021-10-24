import { use, connect, query, disconnect } from '../dao/MySQLDAO';
import { AddProductDAO } from '../dao/AddProductDAO';
import { NewProductDTO } from '../dtos/NewProductDTO';



beforeEach(() => {
    query(`TRUNCATE TABLE maxistock.stock;`);
});


test('Add 1 product', () => {
    
    var nuevoProducto = NewProductDTO("item1", 1, 100)
    AddProductDAO(nuevoProducto)
    query(`
        SELECT * FROM maxistock.stock;
    `).then(res => {
        expect(res).toMatchObject([{codigo: 1, nombre: "item1", cantidad: 100, precio: 1}]);
    });
});

test('Add multiple products', () => {
    
    var nuevoProducto = NewProductDTO("item1", 1, 100)
    var nuevoProducto2 = NewProductDTO("item2", 1, 100)
    var nuevoProducto3 = NewProductDTO("item3", 1, 100)

    AddProductDAO(nuevoProducto)
    AddProductDAO(nuevoProducto2)
    AddProductDAO(nuevoProducto3)

    query(`
        SELECT COUNT(*) FROM maxistock.stock;
    `).then(res => {
        expect(res)==3;
    });
});
