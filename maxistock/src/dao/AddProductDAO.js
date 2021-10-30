import { use, connect, query, disconnect } from "./MySQLDAO";
import { stock, add } from './StockDAO'

function AddProductDAO(newProduct) {

    add(newProduct);
    
};

module.exports = { AddProductDAO };

