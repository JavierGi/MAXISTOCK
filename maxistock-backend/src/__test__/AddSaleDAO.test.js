import { use, connect, query, disconnect } from '../dao/MySQLDAO';
import { AddSaleDAO } from '../dao/AddSaleDAO';
import { NewSaleDTO } from '../dtos/NewSaleDTO';



beforeEach(() => {
    query(`TRUNCATE TABLE maxistock.ventas;`);
});


test('Add 1 sale', () => {
    
    var fechaActual = Date.now();
    var nuevaVenta = NewSaleDTO(123, fechaActual, 100)
    AddSaleDAO(nuevaVenta)
    query(`
        SELECT * FROM maxistock.ventas;
    `).then(res => {
        expect(res).toMatchObject([{codigo: 1, codigo_producto: 123, fecha: fechaActual, cantidad: 100}]);
    });
});

test('Add multiple products', () => {
    
    var fechaActual = Date.now();
    var nuevaVenta = NewSaleDTO(123, fechaActual, 100)
    var nuevaVenta2 = NewSaleDTO(456, fechaActual, 100)
    var nuevaVenta3 = NewSaleDTO(789, fechaActual, 100)

    AddSaleDAO(nuevaVenta)
    AddSaleDAO(nuevaVenta2)
    AddSaleDAO(nuevaVenta3)

    query(`
        SELECT COUNT(*) FROM maxistock.ventas;
    `).then(res => {
        expect(res)==3;
    });
});