import { stock , getProductByCode } from '../dao/StockDAO';
import GetMostSoldProducts from "../services/GetMostSoldProducts";

function GetEverything() {
  return stock;
};

function GetMostBuyed() {
  return GetMostSoldProducts();
};

function GetProductByCode(code) {
    return getProductByCode(code);
};

export {GetEverything, GetProductByCode, GetMostBuyed};
