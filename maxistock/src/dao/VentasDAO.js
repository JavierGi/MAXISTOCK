import { NewSaleDTO } from "../dtos/NewSaleDTO";

const ventas = [];
let   lastId = 0;

const add = obj => {
  lastId = lastId + 1;
  obj = {...obj, id: lastId}
  ventas.push(obj);
}

const truncateVentas = () => {
  ventas.length = 0;
  lastId = 0;
}

const getVentas = () => ventas;

add(new NewSaleDTO(1, Date.now, 2));
add(new NewSaleDTO(2, Date.now, 4));
add(new NewSaleDTO(3, Date.now, 20));
add(new NewSaleDTO(4, Date.now, 32));

export { ventas, truncateVentas, add, getVentas };
