import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressData: {
    firstName: "",
    lastName: "",
    address1: "",
    phoneNo: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddressData: (state, action) => {
      state.addressData = action.payload;
    },
  },
});

export const { setAddressData } = addressSlice.actions;
export const selectAddressData = (state) => state.address.addressData;
export default addressSlice.reducer;
