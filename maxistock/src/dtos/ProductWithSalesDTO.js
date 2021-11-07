function ProductWithSalesDTO(id, name, price, quantity, sales) {
    return {
        id: id,
        nombre: name,  
        precio: price, 
        cantidad: quantity,
        ventas: sales
    };
};

module.exports = { ProductWithSalesDTO };