import GetLeastSoldProductsService from "../services/GetLeastSoldProductsService";

test('Get least sold products when there are 2 prods and 3 sells', () => {
    // arrange
    // we use what's already mocked

    // act
    const leastSoldProducts = GetLeastSoldProductsService()
    const expectedProd1 = {id: 1, nombre: "Gaseosa naranja", precio: 10, cantidad: 12, ventas: 2};
    const expectedProd2 = {id: 2, nombre: "Galletita Limon", precio: 5, cantidad: 15, ventas: 4};

    // assert
    expect(leastSoldProducts[0]).toStrictEqual(expectedProd1);
    expect(leastSoldProducts[1]).toStrictEqual(expectedProd2);
});