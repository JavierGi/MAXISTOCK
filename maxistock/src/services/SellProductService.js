import { NewSaleDTO } from "../dtos/NewSaleDTO";
import { AddSaleDAO } from "../dao/AddSaleDAO";
import { UpdateProductQuantityDAO } from "../dao/UpdateProductQuantityDAO";
import { GetProductByCode } from "./ContentsTableOrquestrator";
import { InsufficientStockException } from "../exceptions/InsufficientStockException";
import { InvalidParametersException } from "../exceptions/InvalidParametersException";

function SellProductService(code, quantity) {
    if (quantity <= 0) {
        throw new InvalidParametersException("La cantidad no puede ser cero o menor")
    }

    var productToSell = GetProductByCode(code)

    if (productToSell.cantidad < quantity) {
        throw new InsufficientStockException(`No hay suficiente cantidad en stock de ${productToSell.nombre}`)
    }

    var newSale = NewSaleDTO(code, Date.now(), quantity)

    UpdateProductQuantityDAO((productToSell.cantidad - quantity), code)
    AddSaleDAO(newSale)
};

export default SellProductService;
