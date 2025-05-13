import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './pages/cartReducer';

// Guardar el carrito en localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart.cartItems);
    localStorage.setItem('cartItems', serializedState);
  } catch (e) {
    console.warn('Error al guardar en localStorage', e);
  }
};

// Leer el carrito desde localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Error al leer de localStorage', e);
    return undefined;
  }
};

// Estado inicial cargado desde localStorage
const preloadedCartItems = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cartItems: preloadedCartItems || [],
    },
  },
});

// Suscribirse para guardar cambios en localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
