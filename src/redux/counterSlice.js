import { createSlice } from "@reduxjs/toolkit";

// Başlangıç state'i
const initialState = {
  count: 0,
};

// Slice oluşturma
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; // State'i değiştirmek için direkt güncelleyebiliriz (Redux Toolkit sayesinde)
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Reducer'ı export et
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
