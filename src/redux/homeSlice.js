import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Başlangıç state'i
const initialState = {
  homeData: {
    title: "Home Page",
    description: "This is the home page.",
    status: "none",
  },
  country:[],
  status: "none",
};

export const getCountries = createAsyncThunk("home/getCountry", async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
});


// Slice oluşturma
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {

      console.log(action.payload,'action.payload');
      console.log(state,'extra reducer state');
      
      
      state.status = "success";
      state.country = action.payload;
    });
    builder.addCase(getCountries.rejected, (state) => {
      state.status = "failed";
    });
  }
});

// Reducer'ı export et
export const { getCountry  } = homeSlice.actions;

export default homeSlice.reducer;
