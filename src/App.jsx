import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import './App.css';
import ProductList from './componentes/ProductList';
import Home from './componentes/home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
