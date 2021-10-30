import { stock , getProductByCode } from '../dao/StockDAO';

export function GetEverything() {
  return stock;
};

/*function GetMostBuyed() {
    connect()
    query("SELECT nombre, cantidad, precio FROM stock JOIN (SELECT * FROM ventas ORDER BY cantidad) ON codigo_producto = codigo")
    disconnect()
};*/

export function GetProductByCode(code) {
    return getProductByCode(code);
};

//module.exports = {GetEverything, GetProductByCode};
