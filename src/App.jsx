import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import './App.css';
import ProductList from './componentes/ProductList';
import Home from './componentes/home/Home';
import AllProductsList from './componentes/AllProductsList';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/all-products" element={<AllProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
