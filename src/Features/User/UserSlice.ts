import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserState } from "./UserTypes";

const initialState: UserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
