function NewSaleDTO(newProductCode, newDate, newQuantity) {
    return {
        productCode: newProductCode,  
        date: newDate, 
        quantity: newQuantity
    };
};

module.exports = { NewSaleDTO };