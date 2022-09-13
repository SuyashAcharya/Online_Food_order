import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  ProductData: [],
  cartIsVisible:false,
  currentItem:[],
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const ApiDataReduser = createReducer(initialState, {
  ProductData: (state, action) => {
    console.log(action)
    state.ProductData = action.payload;
  },
  cardShowOrNot: (state, action) => {
    state.cartIsVisible = action.payload;
    console.log(state.cartIsVisible)
  },
  addItem(state, action) {
   console.log(state);
    const newItem = action.payload;
    console.log(newItem)
    const existingItem = state.cartItems.find(
      (item) => item.id === newItem.id
    );
    state.totalQuantity++;
  
    if (!existingItem) {
      state.cartItems.push({
        id: newItem.id,
        title: newItem.title,
        image01: newItem.image01,
        price: newItem.price,
        quantity: 1,
        totalPrice: newItem.price,
      });
    } else {
      existingItem.quantity++;
      existingItem.totalPrice =
        Number(existingItem.totalPrice) + Number(newItem.price);
    }
  
    state.totalAmount = state.cartItems.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
  
      0
    );
  },
  removeItem(state, action) {
    const id = action.payload;
    const existingItem = state.cartItems.find((item) => item.id === id);
    state.totalQuantity--;

    if (existingItem.quantity === 1) {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    } else {
      existingItem.quantity--;
      existingItem.totalPrice =
        Number(existingItem.totalPrice) - Number(existingItem.price);
    }

    state.totalAmount = state.cartItems.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );
  },
  deleteItem(state, action) {
    const id = action.payload;
    const existingItem = state.cartItems.find((item) => item.id === id);

    if (existingItem) {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
    }

    state.totalAmount = state.cartItems.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );
  },
});
 