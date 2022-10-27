import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Product } from "../pages/products";

export interface ItemInCart {
  qty: number;
  product: Product;
}
// Type for our state
export interface CartState {
  itemsInCart: ItemInCart[];
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
    addToCart(state: CartState, action: { payload: ItemInCart }) {
      const newProductInCart = {
        qty: action.payload.qty,
        product: action.payload.product,
      };
      if (newProductInCart.qty > 0) {
        return {
          itemsInCart: [...state.itemsInCart, newProductInCart],
        };
      } else {
        return {
          itemsInCart: [...state.itemsInCart],
        };
      }
    },
    removeFromCart(state: CartState, action: { payload: ItemInCart }) {
      return {
        itemsInCart: state.itemsInCart.filter(
          (product: ItemInCart) =>
            product.product.id !== action.payload.product.id
        ),
      };
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
