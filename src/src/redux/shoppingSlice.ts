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
    changeQuantity: (state, action) => {
      const itemToModify = state.shoppingList.find(item => item._id === action.payload.item._id);

      if (itemToModify) {
        itemToModify.quantity += action.payload.quantityChange;
      }
    }
  }
})

export default shoppingSlice.reducer;
export const { setShopping, addItem, changeQuantity } = shoppingSlice.actions;

export type RootStateShopping = {
  shopping: ShoppingState;
}