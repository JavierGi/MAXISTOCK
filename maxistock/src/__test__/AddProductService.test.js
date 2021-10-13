import AddProductService from "../services/AddProductService";
import { InvalidParametersException } from "../exceptions/InvalidParametersException";


test('AddProductService add a product', () => {
  const dao = require('../dao/AddProductDAO');
  const dto = require('../dtos/NewProductDTO');
  const addProductDAOmock = jest.fn()
  const newProductDTOmock = jest.fn()
  dao.AddProductDAO = addProductDAOmock;
  dto.NewProductDTO = newProductDTOmock;

  AddProductService("", 1, 1);
  expect(addProductDAOmock).toHaveBeenCalledTimes(1);
  expect(newProductDTOmock).toHaveBeenCalledTimes(1);
});

test('price is too low', () => {
  expect(() => AddProductService("Cosa", 0, 1)).toThrow(InvalidParametersException);
});

test('quantity is too low', () => {
  expect(() => AddProductService("Cosa", 1, 0)).toThrow(InvalidParametersException);
});
