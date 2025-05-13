import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/Api';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import ButtonBack from './ButtonBack';

export default function AllProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getAllProducts()
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  return (
<div
  className="bg-cover bg-center py-16 px-4"
  style={{
    backgroundImage: "url(https://png.pngtree.com/background/20230619/original/pngtree-geometric-background-with-purple-and-blue-neon-lights-in-3d-rendering-picture-image_3760552.jpg)",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="max-w-7xl mx-auto bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
  {/* Contenedor flex para alinear título y botón */}
  <div className="flex justify-between items-center mb-10">
    <h2 className="text-3xl font-bold">Todos los Productos</h2>
    <ButtonBack />
  </div>

  {isLoading ? (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(product => (
        <div key={product.idProduct} className="bg-white bg-opacity-90 rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            {product.imageUrl ? (
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <Link to={`/products/${product.idProduct}`}>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Ver Detalles
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
</div>

  );
}
