function NewProductDTO(newName, newPrice, newQuantity) {
    return {
        nombre: newName,  
        precio: newPrice, 
        cantidad: newQuantity
    };
};

module.exports = { NewProductDTO };
