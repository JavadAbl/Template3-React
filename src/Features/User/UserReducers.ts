import type { PayloadAction, WritableDraft } from "@reduxjs/toolkit";
import type { User, UserState } from "./UserTypes";

export const userReducers = {
  logout: (state: WritableDraft<UserState>) => {
    state.user = null;
    state.accessToken = null;
    state.refreshToken = null;
    state.isAuth = false;
    state.tokenObject = null;
    state.loginStep = 1;
  },

  login: (
    state: WritableDraft<UserState>,
    action: PayloadAction<{
      accessToken: string;
      refreshToken: string;
      tokenObject: any;
    }>
  ) => {
    const { accessToken, refreshToken, tokenObject } = action.payload;
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
    state.tokenObject = tokenObject;
    state.isAuth = true;
  },
};
