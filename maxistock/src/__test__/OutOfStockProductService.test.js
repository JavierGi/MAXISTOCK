import OutOfStockProductsService from "../services/OutOfStockProductsService";

test('Get out of stock products test', () => {
    // arrange
    // we use what's already mocked

    // act
    const outOfStockProds = OutOfStockProductsService()

    // assert
    expect(outOfStockProds).toStrictEqual([]);
});