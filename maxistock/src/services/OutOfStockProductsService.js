import { getStock } from "../dao/StockDAO";

function OutOfStockProductsService() {
    return getStock().filter(prod => prod.cantidad === 0);
}

export default OutOfStockProductsService;