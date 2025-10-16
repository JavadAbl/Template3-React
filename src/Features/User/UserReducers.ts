import type { PayloadAction, WritableDraft } from "@reduxjs/toolkit";
import type { User, UserState } from "./UserTypes";

export const userReducers = {
  setCredentials: (
    state: WritableDraft<UserState>,
    action: PayloadAction<{ user: User; token: string }>
  ) => {
    const { user, token } = action.payload;
    state.user = user;
    state.token = token;
  },
  logOut: (state: WritableDraft<UserState>) => {
    state.user = null;
    state.token = null;
  },
};
