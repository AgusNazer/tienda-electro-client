import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../services/Api';
import { Link } from 'react-router-dom';
import ButtonBack from './ButtonBack';

export default function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then(data => {
        const filtered = data.filter(product =>
          product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filtered);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="py-16 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg p-8 shadow-lg">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Categoría: {categoryName}</h2>
          <ButtonBack />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No hay productos para esta categoría.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white bg-opacity-90 rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-500">Sin imagen</div>
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
