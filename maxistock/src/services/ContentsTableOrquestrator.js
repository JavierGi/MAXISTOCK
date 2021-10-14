import {query, connect, disconnect} from "../dao/MySQLDAO";

function GetEverything() {
    connect
    query("SELECT * FROM maxistock.stock")
    disconnect
};

function GetMostBuyed() {
    connect
    query("SELECT nombre, cantidad, precio FROM stock JOIN (SELECT * FROM ventas ORDER BY cantidad) ON codigo_producto = codigo")
};

function GetProductByCode(code) {
    connect
    return query(`SELECT * FROM stock WHERE codigo = ${code}`)
};

module.exports = {GetEverything, GetMostBuyed, GetProductByCode};