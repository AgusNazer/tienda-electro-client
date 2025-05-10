import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/Api'; 
import ButtonBack from './ButtonBack';

function ProductDetail() {
  const { id } = useParams();
//   const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        console.log(data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Cargando...</div>;
  if (error) return <div className="text-red-600 text-center mt-10">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-xl shadow-md">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-2">${product.price}</p>
      <p className="text-sm text-gray-500">Categoría: {product.category}</p>
      <p className="text-sm text-gray-500">Stock disponible: {product.stock}</p>

      <ButtonBack/>
      {/* <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        ← Volver
      </button> */}
    </div>
  );
}

export default ProductDetail;
