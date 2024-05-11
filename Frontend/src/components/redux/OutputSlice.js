import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flavors: [],
  mlValues: {},
  total: 0,
};

export const outputSlice = createSlice({
  name: "output",
  initialState,
  reducers: {
    setFlavors: (state, action) => {
      state.flavors = action.payload;
    },
    setMlValues: (state, action) => {
      state.mlValues = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setFlavors, setMlValues, setTotal } = outputSlice.actions;
export const selectFlavors = (state) => state.output.flavors;
export const selectMlValues = (state) => state.output.mlValues;
export const selectTotal = (state) => state.output.total;

export default outputSlice.reducer;
