import { typeCartStore, typeItemCart, typeProduct } from "@/app/type.";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: typeCartStore = {
  listCart: [],
  totalAmount: 0,
};

export const Cart = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // add item with token in server cart (login)
    addItemCart: (
      state,
      action: PayloadAction<{ data: typeItemCart[]; totalAmount: number }>
    ) => {
      return {
        ...state,
        listCart: action.payload.data,
        totalAmount: action.payload.totalAmount,
      };
    },

    // add item without token is offline cart (sing up)
    addItemCartWithoutToken: (state, action: PayloadAction<typeProduct>) => {
      return {
        ...state,
        listCart: [
          ...state.listCart,
          {
            counter: 1,
            image: action.payload.image,
            offer: action.payload.offer,
            product: action.payload.product,
            product_id: action.payload.uuid,
            uuid: action.payload.uuid,
            amount: action.payload.amount,
          },
        ],
        totalAmount: state.totalAmount + action.payload.amount,
      };
    },

    // delete item cart when without token
    deleteItemCartWithoutToken: (
      state,
      action: PayloadAction<typeItemCart>
    ) => {
      const newList = state.listCart.filter(
        (x) => x.product_id !== action.payload.product_id
      );
      return {
        ...state,
        listCart: newList,
        totalAmount: state.totalAmount - action.payload.amount,
      };
    },

    // change month 1 or 3 for when without token (sign up)
    updateCounterCartWithoutToken: (
      state,
      action: PayloadAction<{ uuid: string; fun: string }>
    ) => {
      const found = state.listCart.find(
        (x) => x.product_id == action.payload.uuid
      );

      if (found) {
        if (action.payload.fun === "min") {
          if (found.counter <= 1) {
            found.counter = 1;
          } else {
            found.counter = found.counter - 1;
            state.totalAmount = state.totalAmount - found.amount;
          }
        } else {
          found.counter = found.counter + 1;
          state.totalAmount = state.totalAmount + found.amount;
        }
      }
    },
  },
});

export const {
  addItemCart,
  addItemCartWithoutToken,
  updateCounterCartWithoutToken,
  deleteItemCartWithoutToken,
} = Cart.actions;

export default Cart.reducer;
