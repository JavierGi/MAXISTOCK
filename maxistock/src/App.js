import logo from './logo.svg';
import './App.css';
import './components/AddProduct';
import { AddProduct } from './components/AddProduct';
import { TablaDeContenidos } from './components/TablaDeContenidos';

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

