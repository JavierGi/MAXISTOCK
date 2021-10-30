import {query, connect, disconnect} from "../dao/MySQLDAO";
import { stock , getProductBycode } from '../dao/StockDAO';

function GetEverything() {
  return stock;
};

export const GetMostBuyed = () => {
    connect()
    query("SELECT nombre, cantidad, precio FROM stock JOIN (SELECT * FROM ventas ORDER BY cantidad) ON codigo_producto = codigo")
    disconnect()
};

function GetProductByCode(code) {
    return getProductByCode(code);
};

module.exports = {GetEverything, GetMostBuyed, GetProductByCode};
