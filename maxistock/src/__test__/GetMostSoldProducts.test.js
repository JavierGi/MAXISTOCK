import GetMostSoldProducts from "../services/GetMostSoldProducts";

test('Get most sold products when there are 2 prods and 3 sells', () => {
    // arrange
    // we use what's already mocked

    // act
    const mostSoldProducts = GetMostSoldProducts()
    const expectedProd1 = {id: 4, nombre: "Caramelo acido", precio: 1, cantidad: 75, ventas: 32};
    const expectedProd2 = {id: 3, nombre: "Agua mineral", precio: 4, cantidad: 20, ventas: 20};

    // assert
    expect(mostSoldProducts[0]).toStrictEqual(expectedProd1);
    expect(mostSoldProducts[1]).toStrictEqual(expectedProd2);
});