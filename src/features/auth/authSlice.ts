import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  name: string;
  email: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: AuthUser | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthUser>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
