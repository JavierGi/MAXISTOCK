import { NewProductDTO } from "../dtos/NewProductDTO";

const stock = [];
let   lastId = 0;

const add = obj => {
  lastId = lastId + 1;
  obj = {...obj, id: lastId}
  stock.push(obj);
}

const truncateStock = () => {
  stock.length = 0;
  lastId = 0;
}

const getProductByCode = code => {
  return stock.filter(o => o.id === code)[0];
}

const updateProduct = (producto, update) => { 
  Object.assign(producto, update);
}

const getStock = () => stock;


add(new NewProductDTO('Gaseosa naranja', 10.00, 12));
add(new NewProductDTO('Galletita Limon',  5.00, 15));
add(new NewProductDTO('Agua mineral',     4.00, 20));
add(new NewProductDTO('Caramelo acido',   1.00, 75));

export { stock, truncateStock, add , getProductByCode , updateProduct , getStock };
