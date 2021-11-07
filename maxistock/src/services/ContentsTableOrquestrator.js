import { stock , getProductByCode } from '../dao/StockDAO';
import GetMostSoldProducts from "../services/GetMostSoldProducts";

export function GetEverything() {
  return stock;
};

export function GetMostBuyed() {
  return GetMostSoldProducts();
};

export function GetProductByCode(code) {
    return getProductByCode(code);
};
