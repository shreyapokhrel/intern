import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; 

export const userStore = configureStore({
  reducer: {
    users: userReducer, 
  },
});
