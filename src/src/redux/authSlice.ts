import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  passwordsNotMatching: boolean;
}

const initialState: AuthState = {
  passwordsNotMatching: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPasswordsNotMatching: (state, action) => {
      state.passwordsNotMatching = action.payload;
    }
  }
})

export default authSlice.reducer;
export const { setPasswordsNotMatching } = authSlice.actions;

export type RootStateAuth = {
  auth: AuthState;
}