import { use, connect, query, disconnect } from "./MySQLDAO";
import { add } from '../dao/VentasDAO';

function AddSaleDAO(newSale) {
  add(newSale);
};

module.exports = { AddSaleDAO };
