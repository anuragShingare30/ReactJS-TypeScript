import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../Redux/features/counterSlice";

export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})