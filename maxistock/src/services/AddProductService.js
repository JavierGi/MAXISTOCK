import NewProductDTO from "../dtos/NewProductDTO";
import AddProductDAO from "../dao/AddProductDAO";
import InvalidParametersException from "../exceptions/InvalidParametersException";

function AddProductService(name, price, quantity) {
    if (price <= 0) {
        throw new InvalidParametersException("Price cannot be below zero");
    }
    if (quantity <= 0) {
        throw new InvalidParametersException("Quantity cannot be below zero");
    }

    var newProduct = NewProductDTO(name, price, quantity);

    AddProductDAO(newProduct);
};

export default AddProductService;