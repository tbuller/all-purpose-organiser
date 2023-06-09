import { createSlice } from '@reduxjs/toolkit';
import MyFriends from '../components/Social/MyFriends';
import { User } from './usersSlice';

export type Friend = {
  _id: string;
  requesterId: string;
  accepterId: string;
}

export type Request = {
  _id: string;
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
      const loggedInUserId = action.payload.loggedInUserId
      const relevantFriends = action.payload.friends.filter((friend: Friend) => friend.requesterId === loggedInUserId || friend.accepterId === loggedInUserId);

      state.myFriends = relevantFriends;
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
      const relevantRequests = action.payload.requests.filter((request: Request) => request.requesteeId === action.payload.loggedInUserId);

      state.myReceivedRequests = relevantRequests;
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