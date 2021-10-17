import './App.css';
import './components/AddProduct';
import { AddProduct } from './components/AddProduct';
import { TablaDeContenidos } from './components/TablaDeContenidos';

function App() {

  return (
    <div className="App">
        <div className="title">
            MAXISTOCK
        </div>
        <AddProduct /> 
        <TablaDeContenidos />
    </div>
  );
}

export default App;

