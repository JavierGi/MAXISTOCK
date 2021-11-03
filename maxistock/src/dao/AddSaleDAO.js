import { use, connect, query, disconnect } from "./MySQLDAO";
import { add } from '../dao/VentasDAO';

export function AddSaleDAO(newSale) {
  add(newSale);
};

//module.exports = { AddSaleDAO };
