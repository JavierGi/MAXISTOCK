import { use, connect, query, disconnect } from "./MySQLDAO";

const queryStatement = `INSERT INTO maxistock.stock (codigo, nombre, precio, cantidad) VALUES `;

function AddProductDAO(newProduct) {

    const queryParams = `(${newProduct.code}, 
                         "${newProduct.name}", 
                          ${newProduct.price}, 
                          ${newProduct.quantity})`;
    
    query(queryStatement+queryParams);
    
};

export default AddProductDAO;