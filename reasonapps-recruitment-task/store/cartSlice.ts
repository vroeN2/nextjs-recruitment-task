import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Product } from "../pages/products";

// Type for our state
export interface CartState {
  itemsInCart: Product[];
}

// Initial state
const initialState: CartState = {
  itemsInCart: [],
};

// Actual Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to set the authentication status
    addToCart(state, action) {
      state.itemsInCart = [...state.itemsInCart, action.payload];
    },
    removeFromCart(state, action) {
      state.itemsInCart.filter(
        (product: Product) => product.id !== action.payload.id
      );
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.itemsInCart;

export default cartSlice.reducer;
