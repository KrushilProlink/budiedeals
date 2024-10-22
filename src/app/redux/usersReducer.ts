// src/redux/usersReducer.ts
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    adminData: [],
    endUsersData: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {
    adminUsersRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    adminUsersReceived: (state, action) => {
      state.adminData = action.payload;
      state.loading = false;
      state.adminData = action.payload;
      state.currentPage = 0;
    },
    adminUsersRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    endUsersRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    endUsersReceived: (state, action) => {
      state.loading = false;
      state.endUsersData = action.payload;
    },
    endUsersRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    usersReset: (state) => {
      state.loading = false;
      state.adminData = [];
      state.endUsersData = [];
    },
  },
});

export const {
  adminUsersRequested,
  adminUsersReceived,
  adminUsersRequestFailed,
  endUsersRequested,
  endUsersReceived,
  endUsersRequestFailed,
  usersReset,
} = usersSlice.actions;

export default usersSlice.reducer;
