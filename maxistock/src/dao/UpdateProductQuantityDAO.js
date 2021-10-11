import { use, connect, query, disconnect } from "./MySQLDAO";

function UpdateProductQuantityDAO(newQuantity, productCode) {

    connect();

    const queryStatement = `UPDATE maxistock.stock SET cantidad = ${newQuantity} WHERE codigo = ${productCode}`;
    
    query(queryStatement);
    disconnect()
    
};

export default UpdateProductQuantityDAO;