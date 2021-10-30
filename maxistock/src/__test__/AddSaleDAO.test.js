import { use, connect, query, disconnect } from '../dao/MySQLDAO';
import { AddSaleDAO } from '../dao/AddSaleDAO';
import { NewSaleDTO } from '../dtos/NewSaleDTO';
import { truncateVentas, getVentas } from '../dao/VentasDAO';


beforeEach(() => {
  truncateVentas();
});


test('Add 1 sale', () => {
    
    var fechaActual = Date.now();
    var nuevaVenta = NewSaleDTO(123, fechaActual, 100);
    AddSaleDAO(nuevaVenta);

    expect(getVentas().length).toBe(1);
});

test('Add multiple products', () => {
    
    var fechaActual = Date.now();
    var nuevaVenta = NewSaleDTO(123, fechaActual, 100)
    var nuevaVenta2 = NewSaleDTO(456, fechaActual, 100)
    var nuevaVenta3 = NewSaleDTO(789, fechaActual, 100)

    AddSaleDAO(nuevaVenta)
    AddSaleDAO(nuevaVenta2)
    AddSaleDAO(nuevaVenta3)

    const ventas = getVentas()
    expect(ventas.length).toBe(3);
    expect(ventas[2]).toMatchObject(
      {id: 3, codigo: 789, fecha: fechaActual, cantidad: 100});
    
});
