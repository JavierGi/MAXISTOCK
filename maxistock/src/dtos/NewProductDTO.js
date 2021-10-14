function NewProductDTO(newName, newPrice, newQuantity) {
    return {
        name: newName,  
        price: newPrice, 
        quantity: newQuantity
    };
};

module.exports = { NewProductDTO };
