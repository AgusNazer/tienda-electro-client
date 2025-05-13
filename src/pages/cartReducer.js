import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, quantity, price, imageUrl } = action.payload;
      const existing = state.cartItems.find(item => item.id === id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.cartItems.push({ id, name, quantity, price, imageUrl });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
