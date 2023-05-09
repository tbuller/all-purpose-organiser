import { createSlice } from '@reduxjs/toolkit';
import { User } from './usersSlice';

type SocialState = {
  myFriends: string[];
  selectedUser: User | null;
}

const initialState: SocialState = {
  myFriends: [],
  selectedUser: null
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
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    }
  }
})

export default socialSlice.reducer;
export const { setFriends, addFriend, setSelectedUser } = socialSlice.actions;

export type RootStateSocial = {
  social: SocialState;
}