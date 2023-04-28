import { createSlice } from '@reduxjs/toolkit';

type User = {
  _id: string;
  email: string;
  password: string;
  username: string;
  createdAt: Date;
}

type UsersState = {
  users: User[];
  loggedInUser: User | {};
}

const initialState: UsersState = {
  users: [],
  loggedInUser: {}
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    }
  }
})

export default usersSlice.reducer;
export const { setUsers, setLoggedInUser } = usersSlice.actions;

export type RootStateUsers = {
  users: UsersState;
}