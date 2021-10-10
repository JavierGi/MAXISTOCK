import { use, connect, query, disconnect } from "./MySQLDAO";

const queryStatement = `INSERT INTO maxistock.ventas (codigo_producto, fecha, cantidad) VALUES `;

function AddSaleDAO(newSale) {

    connect();

    const queryParams = `("${newSale.productCode}", 
                          ${newSale.date}, 
                          ${newSale.quantity})`;
    
    query(queryStatement+queryParams);
    disconnect()
    
};

export default AddSaleDAO;