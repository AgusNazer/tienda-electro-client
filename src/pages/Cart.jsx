import  { useEffect, useState } from 'react';
import { getAllCarts, getProductById } from '../services/Api'; // ajusta el path
import ButtonBack from '../componentes/ButtonBack';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const carts = await getAllCarts();
        if (!carts || carts.length === 0) {
          setCartItems([]);
          setLoading(false);
          return;
        }

        const cart = carts[0]; // tomamos el primer carrito
        const detailedItems = await Promise.all(
          cart.items.map(async (item) => {
            const product = await getProductById(item.productId);
            return {
              id: item.id,
              name: product.name,
              imageUrl: product.imageUrl,
              price: item.priceAtTime,
              quantity: item.quantity,
            };
          })
        );

        setCartItems(detailedItems);
        setLoading(false);
      } catch (err) {
        console.error('Error loading cart data:', err);
        setLoading(false);
      }
    }

    fetchCartData();
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ).toFixed(2);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Cargando carrito...</div>;
  }
  

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://png.pngtree.com/background/20230619/original/pngtree-geometric-background-with-purple-and-blue-neon-lights-in-3d-rendering-picture-image_3760552.jpg)",
      }}
    >
      <div className="w-full max-w-5xl mx-auto bg-white bg-opacity-70 backdrop-blur-md shadow-lg rounded-lg p-6">
        <ButtonBack />
        <h1 className="text-3xl font-bold mb-6 text-center">Tu Carrito de Compras</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={item.imageUrl || 'https://via.placeholder.com/150'}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    Precio: ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="text-lg font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <h2 className="text-2xl font-bold">Total:</h2>
              <span className="text-2xl font-bold text-green-600">${total}</span>
            </div>

            <div className="text-center mt-6">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}