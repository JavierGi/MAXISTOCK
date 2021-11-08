import { getVentas } from "../dao/VentasDAO";
import { getStock } from "../dao/StockDAO";
import { ProductWithSalesDTO } from "../dtos/ProductWithSalesDTO";

function GetMostSoldProducts() {
    var ventas = getVentas();

    var stockConVentas = getStock().map(prod => ProductWithSalesDTO(prod.id, prod.nombre, prod.precio, prod.cantidad, 0));

    for (var position in ventas) {
        var producto = stockConVentas.find(prod => prod.id === ventas[position].codigo);
        var nuevaCantidadVenta = parseInt(ventas[position].cantidad) + parseInt(producto.ventas);

        stockConVentas.find((prod, n) => {
            if (prod.id === ventas[position].codigo) {
                stockConVentas[n] = ProductWithSalesDTO(prod.id, prod.nombre, prod.precio, prod.cantidad, nuevaCantidadVenta);
            }
        });
    }

    return stockConVentas.sort( compararVentas ).slice(0, 10);
}

function compararVentas( prod1, prod2 ) {
    return prod2.ventas - prod1.ventas;
}

export default GetMostSoldProducts;