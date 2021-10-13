import AddProductService from "../services/AddProductService";


beforeAll(() => {
});

beforeEach(() => {
});

afterEach(() => {
});

afterAll(() => {
});

test('AddProductService add a product', () => {
    const AddProductDAO = jest.fn();
    const AddProductService_B = AddProductDAO.bind(AddProductService);

    AddProductService_B("Cosa", 1, 1);

    expect(AddProductDAO.mock.calls.length).toBe(1)
});

test('AddProductService create a product', () => {
    const NewProductDTO = jest.fn();
    const AddProductService_B = NewProductDTO.bind(AddProductService);

    AddProductService_B("Cosa", 1.0, 1);

    expect(NewProductDTO.mock.calls.length).toBe(1) 
});

test('price is too low', () => {

});

test('quantity is too low', () => {

});
