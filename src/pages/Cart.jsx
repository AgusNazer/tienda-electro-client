import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './cartReducer';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="mt-10 text-center">Tu carrito está vacío.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Carrito de compras</h2>
{cartItems.map((item) => (
  <div key={item.id} className="flex items-center border-b py-4">
    <img
      src={item.imageUrl || '/placeholder.jpg'}
      alt={item.name}
      className="w-20 h-20 object-cover rounded mr-4"
    />
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unitario: ${item.price}</p>
    </div>
    <button
      onClick={() => dispatch(removeFromCart(item.id))}
      className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
    >
      Eliminar
    </button>
  </div>
))}

      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;
