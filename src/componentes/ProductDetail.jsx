import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById, addToCart, getAllCarts } from '../services/Api'; 
import ButtonBack from './ButtonBack';


function ProductDetail() {
  const { id } = useParams();
//   const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //para agregar al cart
  const [quantity, setQuantity] = useState(1);

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

  //para agregar al cart

const handleAddToCart = async () => {
  try {
    const carts = await getAllCarts();
    if (!carts || carts.length === 0) {
      alert("No hay carritos disponibles.");
      return;
    }

    const cartId = carts[0].id;
    await addToCart(cartId, product.idProduct, quantity, product.price);

    alert("Producto agregado al carrito con éxito!");
  } catch (err) {
    console.error("Error al agregar al carrito:", err);
    alert("Hubo un error al agregar el producto al carrito.");
  }
};

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
       <div className="mt-4">
      <label className="block mb-1">Cantidad:</label>
      <input
        type="number"
        min="1"
        max={product.stock}
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="w-20 p-1 border rounded"
      />
    </div>

    <button
      onClick={handleAddToCart}
      className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
    >
      Agregar al carrito
    </button>
      <ButtonBack/>
    </div>
  );
}

export default ProductDetail;
