import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  passwordsNotMatching: boolean;
  loginError: boolean;
}

const initialState: AuthState = {
  passwordsNotMatching: false,
  loginError: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPasswordsNotMatching: (state, action) => {
      state.passwordsNotMatching = action.payload;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    }
  }
})

export default authSlice.reducer;
export const { setPasswordsNotMatching, setLoginError } = authSlice.actions;

export type RootStateAuth = {
  auth: AuthState;
}