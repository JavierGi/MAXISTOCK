import ProductWithSalesDTO from "../dtos/ProductWithSalesDTO";
import NewProductDTO from "../dtos/NewProductDTO";
import NewSaleDTO from "../dtos/NewSaleDTO";
import GetMostSoldProducts from "../services/GetMostSoldProducts";

test('Get most sold products when there are 2 prods and 3 sells', () => {
    // arrange
    const ventasDao = require("../dao/VentasDAO");
    const stockDao = require("../dao/StockDAO");

    const prod1 = {codigo: 1, nombre: "prod1", precio: 10, cantidad: 100};
    const prod2 = {codigo: 2, nombre: "prod2", precio: 20, cantidad: 200};
    const stockDaoMock = jest.fn().mockReturnValue([ prod1, prod2 ]);
    const dateNow = Date.now();
    const venta1 = {codigo: 1, fecha: dateNow, cantidad: 6};
    const venta2 = {codigo: 2, fecha: dateNow, cantidad: 5};
    const venta3 = {codigo: 2, fecha: dateNow, cantidad: 4};
    const ventasDaoMock = jest.fn().mockReturnValue([ venta1, venta2, venta3 ]);

    ventasDaoMock.VentasDAO = ventasDaoMock;
    stockDaoMock.StockDAO = stockDaoMock;

    // act
    const mostSoldProducts = GetMostSoldProducts()
    const expectedProd1 = {codigo: 1, nombre: "prod1", precio: 10, cantidad: 100, ventas: 6};
    const expectedProd2 = {codigo: 2, nombre: "prod2", precio: 20, cantidad: 200, ventas: 9};

    // assert
    //expect(ventasDaoMock).toHaveBeenCalledTimes(1);
    //expect(stockDaoMock).toHaveBeenCalledTimes(1);
    console.log(mostSoldProducts)
    expect(mostSoldProducts.length).toBe(2);
    expect(mostSoldProducts[0]).toBe(expectedProd2);
    expect(mostSoldProducts[1]).toBe(expectedProd1);
});