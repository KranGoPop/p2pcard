import { configureStore } from '@reduxjs/toolkit';
import appReducer from "../features/main/MainSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  }
})