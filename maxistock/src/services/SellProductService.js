import NewSaleDTO from "../dtos/NewSaleDTO";
import AddSaleDAO from "../dao/AddSaleDAO";
import UpdateProductQuantityDAO from "../dao/UpdateProductQuantityDAO";
import {GetProductByCode} from "./ContentsTableOrquestrator";

function SellProductService(code, quantity) {
    if (quantity <= 0) {
        throw new InvalidParametersException("Quantity cannot be zero or less")
    }

    var productToSell = GetProductByCode(code)

    if (productToSell.cantidad < quantity) {
        throw new InsufficientStockException(`There is not enough stock of product ${code}`)
    }

    var newSale = NewSaleDTO(0, code, Date.now, quantity)

    UpdateProductQuantityDAO((productToSell.cantidad - quantity), code)
    AddSaleDAO(newSale)
};

export default SellProductService;