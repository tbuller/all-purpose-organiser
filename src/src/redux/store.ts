import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice';
import authReducer from './authSlice';
import shoppingReducer from './shoppingSlice';
import calendarReducer from './calendarSlice';
import navReducer from './navSlice';
import notesReducer from './notesSlice';
import socialReducer from './socialSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    shopping: shoppingReducer,
    calendar: calendarReducer,
    nav: navReducer,
    notes: notesReducer,
    social: socialReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;