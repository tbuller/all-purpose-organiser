import { createSlice } from '@reduxjs/toolkit';

type NavState = {
  viewedComponent: string;
}

const initialState = {
  viewedComponent: "calendar"
}

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setViewedComponent: (state, action) => {
      state.viewedComponent = action.payload;
    }
  }
})

export default navSlice.reducer;
export const { setViewedComponent } = navSlice.actions;

export type RootStateNav = {
  nav: NavState;
}