import { NewProductDTO } from "../dtos/NewProductDTO";

const stock = [];

stock.push(new NewProductDTO('Gaseosa naranja', 10.00, 12));
stock.push(new NewProductDTO('Galletita Limon',  5.00, 15));
stock.push(new NewProductDTO('Agua mineral',     4.00, 20));
stock.push(new NewProductDTO('Caramelo acido',   1.00, 75));

export { stock };
