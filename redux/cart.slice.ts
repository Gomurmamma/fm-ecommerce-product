import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [], // allows for array methods
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(
        (item) => (item.productName = action.payload.productName)
      );

      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find(
        (item) => (item.productName = action.payload.productName)
      );
      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find(
        (item) => (item.productName = action.payload.productName)
      );

      if (!item) return;
      if (item.quantity === 1) {
        const itemIndex = state.findIndex(
          (item) => item.productName === action.payload.productName
        );
        state.splice(itemIndex, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.productName === action.payload.productName
      );
      state.splice(itemIndex, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
