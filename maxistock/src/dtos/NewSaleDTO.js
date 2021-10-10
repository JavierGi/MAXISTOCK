function NewSaleDTO(newCode, newProductCode, newDate, newQuantity) {
    return {
        code: newCode,
        productCode: newProductCode,  
        date: newDate, 
        quantity: newQuantity
    };
};

export default NewSaleDTO;