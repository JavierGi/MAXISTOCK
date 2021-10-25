import { use, connect, query, disconnect } from "./MySQLDAO";

function UpdateProductQuantityDAO(newQuantity, productCode) {

    const queryStatement = `UPDATE maxistock.stock SET cantidad = ${newQuantity} WHERE codigo = ${productCode}`;
    
    query(queryStatement);
    
};

module.exports = { UpdateProductQuantityDAO };