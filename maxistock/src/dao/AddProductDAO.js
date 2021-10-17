import { use, connect, query, disconnect } from "./MySQLDAO";
import { stock } from './StockDAO'

const queryStatement = `INSERT INTO maxistock.stock (nombre, precio, cantidad) VALUES `;

function AddProductDAO(newProduct) {

    const queryParams = `(${newProduct.name}, 
                          ${newProduct.price}, 
                          ${newProduct.quantity})`;
    
    // query(queryStatement+queryParams);
    stock.push(newProduct);
    
};

function GetStockDAO(){
  return stock;
}

export { AddProductDAO, GetStockDAO };

