import { use, connect, query, disconnect } from '../dao/MySQLDAO';
import { AddProductDAO } from '../dao/AddProductDAO';
import { NewProductDTO } from '../dtos/NewProductDTO';
import { UpdateProductQuantityDAO } from '../dao/UpdateProductQuantityDAO';


beforeEach(() => {
    query(`TRUNCATE TABLE maxistock.stock;`);
});


test('Modify product quantity', () => {
    
    var nuevoProducto = NewProductDTO("item1", 1, 100)
    AddProductDAO(nuevoProducto)

    UpdateProductQuantityDAO(200, 1)

    query(`
        SELECT * FROM maxistock.stock;
    `).then(res => {
        expect(res).toMatchObject([{codigo: 1, nombre: "item1", cantidad: 200, precio: 1}]);
    });

});