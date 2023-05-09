import { createSlice } from '@reduxjs/toolkit';

type SocialState = {
  myFriends: string[];
}

const initialState: SocialState = {
  myFriends: []
}

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setFriends: (state, action) => {
      state.myFriends = action.payload;
    },
    addFriend: (state, action) => {
      state.myFriends.push(action.payload);
    }
  }
})

export default socialSlice.reducer;
export const { setFriends, addFriend } = socialSlice.actions;

export type RootStateSocial = {
  social: SocialState;
}