import { createSlice } from '@reduxjs/toolkit';
import { User } from './usersSlice';

type Request = {
  requesterId: string;
  requesteeId: string;
}

type SocialState = {
  myFriends: string[];
  mySentRequests: Request[];
  myReceivedRequests: Request[];
  selectedUser: User | null;
}

const initialState: SocialState = {
  myFriends: [],
  mySentRequests: [],
  myReceivedRequests: [],
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
    },
    setMySentRequests: (state, action) => {
      const relevantRequests = action.payload.requests.filter((request: Request) => request.requesterId === action.payload.loggedInUserId);

      state.mySentRequests = relevantRequests;
    },
    setMyReceivedRequests: (state, action) => {
      state.myReceivedRequests = action.payload;
    },
    addMySentRequest: (state, action) => {
      state.mySentRequests.push(action.payload);
    }
  }
})

export default socialSlice.reducer;
export const { setFriends, addFriend, setSelectedUser, setMySentRequests, setMyReceivedRequests, addMySentRequest } = socialSlice.actions;

export type RootStateSocial = {
  social: SocialState;
}