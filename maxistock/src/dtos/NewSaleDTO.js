function NewSaleDTO(newProductCode, newDate, newQuantity) {
    return {
        codigo: newProductCode,  
        fecha: newDate, 
        cantidad: newQuantity
    };
};

module.exports = { NewSaleDTO };
