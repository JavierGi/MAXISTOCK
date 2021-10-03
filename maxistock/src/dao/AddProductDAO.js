import { connect } from "../MySQLDAO";

const queryStatement = `INSERT INTO items (id, nombre, precio, cantidad) VALUES `;

function AddProductDAO(newProduct) {

    const queryParams = "(" + 
        String(newProduct.code) + ", " + 
        String(newProduct.name) + ", " + 
        String(newProduct.price) + ", " + 
        String(newProduct.quantity) 
    + ");";

    connect()
    query(queryStatement + queryParams);
};

export default AddProductDAO;