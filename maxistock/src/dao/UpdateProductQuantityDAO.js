import { use, connect, query, disconnect } from "./MySQLDAO";
import { getProductByCode, updateProduct } from '../dao/StockDAO';

export function UpdateProductQuantityDAO(newQuantity, productCode) {

  const producto = getProductByCode(productCode);
  
  updateProduct(producto, { cantidad: newQuantity });

};

export function UpdateProductSellQuantityDAO(newQuantity, productCode) {

  const producto = getProductByCode(productCode);
  
  updateProduct(producto, { cantidadVendida: newQuantity });

};

//module.exports = { UpdateProductQuantityDAO };
