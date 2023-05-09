import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type Item = {
  creatorId: string;
  name: string;
  quantity: number;
  _id: string;
}

type ShoppingState = {
  shoppingList: Item[];
}

const initialState: ShoppingState = {
  shoppingList: []
}

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    setShopping: (state, action) => {
      state.shoppingList = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.shoppingList.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.shoppingList.findIndex(item => item._id === action.payload._id);

      if (itemIndex !== -1) {
        state.shoppingList[itemIndex] = action.payload;
      }
    }
  }
})

export default shoppingSlice.reducer;
export const { setShopping, addItem, updateItem } = shoppingSlice.actions;

export type RootStateShopping = {
  shopping: ShoppingState;
}