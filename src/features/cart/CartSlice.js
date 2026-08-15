import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems:[],
  totalPrice: 0,
  totalQuantity: 0,
};

const updateTotals = (state) => {
  state.totalQuantity = state.cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  state.totalPrice = state.cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0)
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addItem: (state, action) => {
  const findItem = state.cartItems.find((item) => item.id === action.payload.id)

  if(findItem) {
    findItem.quantity++;
  } else {
    state.cartItems.push({...action.payload, quantity: 1});
  }
  updateTotals(state);
},
  removeItem: (state, action) => {
    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
  updateTotals(state);
  },
  decrementItemQuantity: (state, action) => {
    const findItem = state.cartItems.find((item) => item.id === action.payload)

    if(findItem.quantity === 1) {
      state.cartItems = state.cartItems.filter((item) => 
        item.id !== action.payload)
    } else {
      findItem.quantity--;
    }
    updateTotals(state);
  },
  clearCart: (state) => {
    state.cartItems = [];
    state.totalPrice = 0;
    state.totalQuantity = 0;
    updateTotals(state);
  }
  },
});
export const {addItem, removeItem, clearCart, decrementItemQuantity} = CartSlice.actions;
export default CartSlice.reducer;