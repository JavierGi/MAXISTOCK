import { use, connect, query, disconnect } from "./MySQLDAO";
import { getProductByCode, updateProduct } from '../dao/StockDAO';

function UpdateProductQuantityDAO(newQuantity, productCode) {

  const producto = getProductByCode(productCode);
  
  updateProduct(producto, { cantidad: newQuantity });

};

module.exports = { UpdateProductQuantityDAO };
