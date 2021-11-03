// import { use, connect, query, disconnect } from "./MySQLDAO";
import { stock, add } from './StockDAO'

function GetStockDAO(){
  return stock;
}

function AddProductDAO(newProduct) {

    add(newProduct);
    
};

export { AddProductDAO, GetStockDAO };

