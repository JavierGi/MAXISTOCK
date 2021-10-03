function NewProductDTO(newCode, newName, newPrice, newQuantity) {
    return {
        code: newCode,
        name: newName,  
        price: newPrice, 
        quantity: newQuantity
    };
};

export default NewProductDTO;