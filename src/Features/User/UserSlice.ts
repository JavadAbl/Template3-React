import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import type { UserState } from "./UserTypes";
import { userReducers } from "./UserReducers";
import { storage } from "../../Utils/Storage";

const initialState: UserState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  tokenObject: null,
  isAuth: false,
  loginStep: 1,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: userReducers,
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;

export const userListenerMiddleware = createListenerMiddleware();
userListenerMiddleware.startListening({
  actionCreator: userActions.logout,
  effect: () => {
    storage.removeItem("accessToken");
    storage.removeItem("refreshToken");
  },
});
userListenerMiddleware.startListening({
  actionCreator: userActions.login,
  effect: (action) => {
    storage.setItem("accessToken", action.payload.accessToken);
    storage.setItem("refreshToken", action.payload.refreshToken);
  },
});
