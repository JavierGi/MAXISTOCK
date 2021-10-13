import { use, connect, query, disconnect } from "./MySQLDAO";

const queryStatement = `INSERT INTO maxistock.stock (nombre, precio, cantidad) VALUES `;

function AddProductDAO(newProduct) {

    const queryParams = `("${newProduct.name}", 
                          ${newProduct.price}, 
                          ${newProduct.quantity})`;
    
    query(queryStatement+queryParams);
    
};

// export default AddProductDAO;
module.exports = { AddProductDAO };

