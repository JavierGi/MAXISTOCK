import NewProductDTO from "../dtos/NewProductDTO";
import AddProductDAO from "../dao/AddProductDAO";

function AddProductService(code, name, price, quantity) {
    var newProduct = NewProductDTO(code, name, price, quantity)

    AddProductDAO(newProduct);
};

export default AddProductService;