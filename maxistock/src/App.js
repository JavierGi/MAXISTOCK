import logo from './logo.svg';
import './App.css';
import './components/AddProduct';
import { AddProduct } from './components/AddProduct';
import { TablaDeContenidos } from './components/TablaDeContenidos';
import { RegistrarVenta } from './components/RegistrarVenta';

function App() {
  return (
    <div className="App">
        <div className="title">
            MAXISTOCK
        </div>
        <AddProduct></AddProduct>
        <div>
          <TablaDeContenidos></TablaDeContenidos>
        </div>
        <div>
          <RegistrarVenta producto={null}></RegistrarVenta>
        </div>
    </div>
  );
}

export default App;

