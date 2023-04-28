import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: []
}

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    setShopping: (state, action) => {
      state.shoppingList = action.payload;
    }
    // addItem: (state, action) => {
    //   state.shoppingList.push(action.payload);
    // }
  }
})

export default shoppingSlice.reducer;
export const { setShopping } = shoppingSlice.actions;