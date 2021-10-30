import SellProductService from "../services/SellProductService";
import { InsufficientStockException } from "../exceptions/InsufficientStockException";
import { InvalidParametersException } from "../exceptions/InvalidParametersException";


test('SellProductService sell a product', () => {
  const addSaleDao = require('../dao/AddSaleDAO');
  const getProductByCode = require("../services/ContentsTableOrquestrator");
  const updateProductQuantityDao = require('../dao/UpdateProductQuantityDAO');
  const newSaleDto = require('../dtos/NewSaleDTO');

  const addSaleDaoMock = jest.fn()
  const prodmock = {codigo:123, nombre:"prodmock", cantidad:11, precio:2.2}
  const getProductByCodeMock = jest.fn().mockReturnValue(prodmock)
  const updateProductQuantityDaoMock = jest.fn()
  const newSaleDtoMock = jest.fn()

  addSaleDao.AddSaleDAO = addSaleDaoMock;
  getProductByCode.GetProductByCode = getProductByCodeMock;
  updateProductQuantityDao.UpdateProductQuantityDAO = updateProductQuantityDaoMock;
  newSaleDto.NewSaleDTO = newSaleDtoMock;

  SellProductService(123, 10)
  expect(addSaleDaoMock).toHaveBeenCalledTimes(1);
  expect(getProductByCodeMock).toHaveBeenCalledTimes(1);
  expect(updateProductQuantityDaoMock).toHaveBeenCalledTimes(1);
  expect(newSaleDtoMock).toHaveBeenCalledTimes(1);
});


test('cant sell zero or less of a stock', () => {
  expect(() => SellProductService(123, 0)).toThrow(InvalidParametersException);
});


test('cant sell non-available stock', () => {
  const getProductByCode = require("../services/ContentsTableOrquestrator");

  const prodmock = {codigo:123, nombre:"prodmock", cantidad:11, precio:2.2};
  const getProductByCodeMock = jest.fn().mockReturnValue(prodmock);
    
  getProductByCode.GetProductByCode = getProductByCodeMock;

  expect(() => SellProductService(123, 100)).toThrow(InsufficientStockException);
});