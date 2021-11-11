import { getStock } from "../dao/StockDAO";

function OutOfStockProductService() {
    return getStock().filter(prod => prod.cantidad === 0);
}

export default OutOfStockProductService;