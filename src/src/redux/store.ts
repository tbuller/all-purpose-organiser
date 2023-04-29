import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice';
import authReducer from './authSlice';
import shoppingReducer from './shoppingSlice';
import calendarReducer from './calendarSlice';
import navReducer from './navSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    shopping: shoppingReducer,
    calendar: calendarReducer,
    nav: navReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;