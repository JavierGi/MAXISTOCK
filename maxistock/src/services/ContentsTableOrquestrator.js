import {query, connect, disconnect} from "../dao/MySQLDAO";

export const GetEverything = () => {
    connect()
    query("SELECT * FROM stock")
    disconnect()
}

export const GetMostBuyed = () => {
    connect()
    query("SELECT nombre, cantidad, precio FROM stock JOIN (SELECT * FROM ventas ORDER BY cantidad) ON codigo_producto = codigo")
    disconnect()
}