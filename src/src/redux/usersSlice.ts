import { createSlice } from '@reduxjs/toolkit';

export type User = {
  _id: string;
  email: string;
  password: string;
  username: string;
  createdAt: Date;
}

type UsersState = {
  users: User[];
  loggedInUser: User | null;
}

const initialState: UsersState = {
  users: [],
  loggedInUser: null
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    }
  }
})

export default usersSlice.reducer;
export const { setUsers, addUser, setLoggedInUser } = usersSlice.actions;

export type RootStateUsers = {
  users: UsersState;
}