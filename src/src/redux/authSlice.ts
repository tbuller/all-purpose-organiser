import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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