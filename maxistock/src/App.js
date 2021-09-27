import logo from './logo.svg';
import './App.css';
import 'C:/Users/Lautarito/Desktop/Facultad/IngSoft/MAXISTOCK/maxistock/src/components/AddProduct';
import { AddProduct } from 'C:/Users/Lautarito/Desktop/Facultad/IngSoft/MAXISTOCK/maxistock/src/components/AddProduct';
import { TablaDeContenidos } from 'C:/Users/Lautarito/Desktop/Facultad/IngSoft/MAXISTOCK/maxistock/src/components/TablaDeContenidos';

function App() {
  return (
    <div className="App">
      <body>
        <div className="title">
            MAXISTOCK
        </div>
        <AddProduct></AddProduct>
        <div>
          <TablaDeContenidos></TablaDeContenidos>
        </div>
      </body>
    </div>
  );
}

export default App;

