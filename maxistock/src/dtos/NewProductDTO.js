function NewProductDTO(newName, newPrice, newQuantity) {
    return {
        nombre: newName,  
        precio: newPrice, 
        cantidad: newQuantity,
        cantidadVendida: 0
    };
};

module.exports = { NewProductDTO };
