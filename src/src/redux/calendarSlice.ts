import { createSlice } from '@reduxjs/toolkit';

type CalendarState = {
  view: string;
}

const initialState: CalendarState = {
  view: "month"
}

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    }
  }
})

export default calendarSlice.reducer;
export const { setView } = calendarSlice.actions;

export type RootStateCalendar = {
  calendar: CalendarState
}