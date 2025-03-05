import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";  // Counter reducer'ı içe aktar
import homeReducer from "./homeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Store içinde reducer'ı ekledik
    home: homeReducer
  },
});

export default store;
