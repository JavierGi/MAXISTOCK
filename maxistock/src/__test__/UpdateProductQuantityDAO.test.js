import { use, connect, query, disconnect } from '../dao/MySQLDAO';
import { AddProductDAO } from '../dao/AddProductDAO';
import { NewProductDTO } from '../dtos/NewProductDTO';
import { UpdateProductQuantityDAO } from '../dao/UpdateProductQuantityDAO';
import {  truncateStock , getProductByCode } from '../dao/StockDAO';

beforeEach(() => {
  truncateStock();
});


test('Modify product quantity', () => {
    
    var nuevoProducto = NewProductDTO("item1", 1, 100)
    AddProductDAO(nuevoProducto)

    UpdateProductQuantityDAO(200, 1)

    expect(getProductByCode(1).cantidad).toBe(200);

});
