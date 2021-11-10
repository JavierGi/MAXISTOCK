import { NewProductDTO } from "../dtos/NewProductDTO";
import { AddProductDAO , GetStockDAO } from "../dao/AddProductDAO";
import { InvalidParametersException } from "../exceptions/InvalidParametersException";

function AddProductService(name, price, quantity) {
    if (price <= 0) {
        throw new InvalidParametersException("El precio no pude ser menor a cero");
    }
    if (quantity <= 0) {
        throw new InvalidParametersException("La cantidad no puede ser menor a cero");
    }

    var newProduct = NewProductDTO(name, price, quantity);

    AddProductDAO(newProduct);
};

function GetStockService(){
  return GetStockDAO();
}

export { AddProductService, GetStockService };
