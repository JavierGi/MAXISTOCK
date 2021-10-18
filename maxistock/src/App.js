import './App.css';
import './components/AddProduct';
import { StatusProvider } from './components/StatusContext';
import { AddProduct } from './components/AddProduct';
import { TablaDeContenidos } from './components/TablaDeContenidos';

function App() {

  return (
    <div className="App">
        <div className="title">
            MAXISTOCK
        </div>
        <StatusProvider>
          <AddProduct /> 
          <TablaDeContenidos />
        </StatusProvider>
    </div>
  );
}

export default App;

