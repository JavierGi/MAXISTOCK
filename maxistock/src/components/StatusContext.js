import { createContext, useState } from 'react';
import { GetStockService } from '../services/AddProductService';

const StatusContext = createContext({
  status: { stock : [], count: 0, },
  action: { setStock : () => {}, informStock: () => {} },
});

const StatusProvider = ({ children }) => {
  const [stock, setStock] = useState(GetStockService());
  const status = { stock: stock, count: 0,  };
  const action = { setStock: setStock, informStock: () => {}, };

  return(
    <StatusContext.Provider value={{ status, action }}>
      { children }
    </StatusContext.Provider>
  );
}

export { StatusContext, StatusProvider };
