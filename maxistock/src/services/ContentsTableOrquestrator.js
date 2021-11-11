import { stock , getProductByCode } from '../dao/StockDAO';
import GetMostSoldProducts from "../services/GetMostSoldProducts";
import GetLeastSoldProductsService from "../services/GetLeastSoldProductsService";
import OutOfStockProductsService from "../services/OutOfStockProductsService";

function GetEverything() {
  return stock;
};

function GetMostBuyed() {
  return GetMostSoldProducts();
};

function GetLeastBuyed() {
  return GetLeastSoldProductsService();
}

function GetSoldOutProducts() {
  return OutOfStockProductsService();
}

function GetProductByCode(code) {
  return getProductByCode(code);
};

export {GetEverything, GetProductByCode, GetMostBuyed, GetLeastBuyed, GetSoldOutProducts};
