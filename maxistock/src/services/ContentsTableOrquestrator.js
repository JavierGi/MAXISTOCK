import { stock , getProductByCode } from '../dao/StockDAO';

function GetEverything() {
  return stock;
};

function GetMostBuyed() {
    //Nahuel conecta GetMostSoldProduct acá para no tocar el front
    return [{nombre: "test1", precio: 20, cantidadVendida: 20}, {nombre: "test2", precio: 30, cantidadVendida: 15}, {nombre: "test3", precio: 20, cantidadVendida: 10}]
};

function GetProductByCode(code) {
    return getProductByCode(code);
};

export {GetEverything, GetProductByCode, GetMostBuyed};
