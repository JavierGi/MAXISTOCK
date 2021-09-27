import NewProductDTO from "../dtos/NewProductDTO";
import AddProductRepository from "../repository/AddProductRepository";

function AddProductOrquestrator(code, name, price, quantity) {
    var newProduct = NewProductDTO(code, name, price, quantity)

    AddProductRepository(newProduct);
};

export default AddProductOrquestrator;