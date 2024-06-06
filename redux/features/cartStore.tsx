import { typeCartStore, typeProduct } from "@/app/type.";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: typeCartStore = {
  listCart: [],
  totalAmount: 0,
};

export const Cart = createSlice({
  name: "cart",
  initialState,

  reducers: {
    /// add item with token in server cart (sign in)
    // addItemCart: (state, action) => {
    //   return {
    //     ...state,
    //     listCart: action.payload.data,
    //     totalAmount: action.payload.totolAmount,
    //   };
    // },

    // add item without token is offline cart (sing up)
    addItemCartWithoutToken: (state, action: PayloadAction<typeProduct>) => {
      return {
        ...state,
        listCart: [...state.listCart, { ...action.payload, counterProduct: 1 }],
        totalAmount: state.totalAmount + action.payload.amount,
      };
    },

    // delete item cart when without token
    removeItemCartWithoutToken: (state, action: PayloadAction<typeProduct>) => {
      const newList = state.listCart.filter(
        (x) => x.uuid !== action.payload.uuid
      );
      return {
        ...state,
        listCart: newList,
        totalAmount: state.totalAmount - action.payload.amount,
      };
    },

    // change month 1 or 3 for when without token (sign up)
    changeCounterCartWithoutToken: (
      state,
      action: PayloadAction<{ uuid: string; fun: string }>
    ) => {
      const found = state.listCart.find((x) => x.uuid == action.payload.uuid);

      if (found) {
        if (action.payload.fun === "min") {
          if (found.counterProduct <= 1) {
            found.counterProduct = 1;
          } else {
            found.counterProduct = found.counterProduct - 1;
            state.totalAmount = state.totalAmount - found.amount;
          }
        } else {
          found.counterProduct = found.counterProduct + 1;
          state.totalAmount = state.totalAmount + found.amount;
        }
      }
    },

    // /// change month 1 or 3 for when without token (sign up)
    // changeMonthCartWithoutToken: (state, action) => {
    //   const found = state.listCart.find((x) => x.id === action.payload.id);

    //   if (found) {
    //     found.month_num = action.payload.month_num;
    //     found.price;
    //   }
    // },

    // /// delete item cart when without token (sign up)
    // deleteCartWithoutToken: (state, action) => {
    //   const newList = state.listCart.filter((x) => x.id !== action.payload.id);

    //   return {
    //     ...state,
    //     listCart: newList,
    //     totalAmount: state.totalAmount - action.payload.price,
    //   };
    // },

    // /// clear listCart cart
    // clearCart: () => {
    //   return {
    //     listCart: [],
    //     totalAmount: 0,
    //   };
    // },
  },
});

export const {
  addItemCartWithoutToken,
  removeItemCartWithoutToken,
  changeCounterCartWithoutToken,
} = Cart.actions;

export default Cart.reducer;
