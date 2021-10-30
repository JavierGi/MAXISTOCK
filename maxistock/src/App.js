import logo from './logo.svg';
import './App.css';
import './components/AddProduct';
import { AddProduct } from './components/AddProduct';
import { ContentsTable } from './components/ContentsTable';

function App() {
  return (
    <div className="App">
        <div className="title">
            MAXISTOCK
        </div>
        <AddProduct></AddProduct>
        <div>
          <ContentsTable></ContentsTable>
        </div>
    </div>
  );
}

export default App;

