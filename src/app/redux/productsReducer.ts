// src/redux/coachingReducer.ts
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], loading: false, error: null },
  reducers: {
    productsRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    productsReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    productsRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProductData: (state: any, action) => {
      const updatedData = state?.data?.data?.map((x: any) =>
        x?._id === action?.payload?._id
          ? { ...x, ...action.payload, updated: true }
          : x
      );

      return {
        ...state,
        loading: false,
        data: { ...state?.data, data: updatedData },
      };
    },
    singleProductRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    singleProductReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    singleProductRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productsReset: (state) => {
      state.loading = false;
      state.data = [];
    },
  },
});

export const {
  productsRequested,
  productsReceived,
  productsRequestFailed,
  singleProductRequested,
  singleProductReceived,
  singleProductRequestFailed,
  updateProductData,
  productsReset,
} = productSlice.actions;

export default productSlice.reducer;
