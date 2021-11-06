function ProductWithSalesDTO(name, price, quantity, sales) {
    return {
        nombre: name,  
        precio: price, 
        cantidad: quantity,
        ventas: sales
    };
};

module.exports = { ProductWithSalesDTO };