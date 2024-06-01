"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./features/cartStore";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cartStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
