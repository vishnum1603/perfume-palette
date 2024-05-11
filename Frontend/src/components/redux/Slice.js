import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import { addressSlice } from "./AddressSlice";
import { outputSlice } from "./OutputSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    address: addressSlice.reducer,
    output: outputSlice.reducer ,
  },
});
