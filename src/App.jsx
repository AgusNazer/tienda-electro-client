import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import './App.css';
import ProductList from './componentes/Home';
import Home from './componentes/Home';
import AllProductsList from './componentes/AllProductsList';
import Cart from './pages/Cart';
import Welcome from './componentes/home/Welcome';
import ProductDetail from './componentes/ProductDetail';
import Footer from './componentes/Footer';
import CategoryProducts from './componentes/CategoryProducts';

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all-products" element={<AllProductsList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

