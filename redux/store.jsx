"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./features/cartStore";

export const store = configureStore({
  reducer: {
    cartStore,
  },
});
