import { getVentas } from "../dao/VentasDAO";
import { getStock } from "../dao/StockDAO";
import { ProductWithSalesDTO } from "../dtos/ProductWithSalesDTO";

function GetMostSoldProducts() {
    var ventas = getVentas();

    var stockConVentas = getStock().map(prod => ProductWithSalesDTO(prod.nombre, prod.precio, prod.cantidad, 0));

    for (var venta in ventas) {
        var producto = stockConVentas.find(prod => prod.codigo === venta.codigo);
        var nuevaCantidadVenta = venta.cantidad + producto.ventas;

        stockConVentas.find((prod, n) => {
            if (prod.codigo === venta.codigo) {
                stockConVentas[n] = ProductWithSalesDTO(prod.nombre, prod.precio, prod.cantidad, nuevaCantidadVenta);
            }
        });
    }

    return stockConVentas.sort( compararVentas ).slice(0, 10);
}

function compararVentas( prod1, prod2 ) {
    if ( prod1.ventas > prod2.ventas ){
      return -1;
    }
    if ( prod1.ventas < prod2.ventas ){
      return 1;
    }
    return 0;
  }

export default GetMostSoldProducts;