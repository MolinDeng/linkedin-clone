import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // default import

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
