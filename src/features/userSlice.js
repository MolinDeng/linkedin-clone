import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.account = action.payload;
    },
    logout: (state) => {
      state.account = initialState.account;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.account; // state is the store defined in store.js

export default userSlice.reducer;
