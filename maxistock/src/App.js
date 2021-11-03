import './App.css';
import './components/AddProduct';
import { StatusProvider } from './components/StatusContext';
import { AddProduct } from './components/AddProduct';
import { ContentsTable } from './components/ContentsTable';

function App() {
  return (
    <div className="App">
        <div className="title">
            MAXISTOCK
        </div>
      <StatusProvider>
        <AddProduct></AddProduct>
        <ContentsTable></ContentsTable>
      </StatusProvider>
    </div>
  );
}

export default App;

