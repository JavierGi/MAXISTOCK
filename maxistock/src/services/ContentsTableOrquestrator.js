import { stock , getProductByCode } from '../dao/StockDAO';
import GetMostSoldProducts from "../services/GetMostSoldProducts";
import GetLeastSoldProductsService from "../services/GetLeastSoldProductsService";

function GetEverything() {
  return stock;
};

function GetMostBuyed() {
  return GetMostSoldProducts();
};

function GetLeastBuyed() {
  return GetLeastSoldProductsService();
}

//Nahue, como la otra vez, vos conectá tu query a estas funciones así no tenés que tocar el código del front
function GetSoldOutProducts() {
  return [{codigo: 1, nombre: "galletitas", precio: 150, cantidad: 0}, {codigo: 1, nombre: "agua", precio: 100, cantidad: 0}, {codigo: 1, nombre: "jugo", precio: 210, cantidad: 0}]
}

function GetProductByCode(code) {
  return getProductByCode(code);
};

export {GetEverything, GetProductByCode, GetMostBuyed, GetLeastBuyed, GetSoldOutProducts};
