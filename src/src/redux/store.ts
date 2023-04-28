import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice';
import authReducer from './authSlice';
import shoppingReducer from './shoppingSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;