import { createSlice } from '@reduxjs/toolkit';

const currentDate = new Date();

type CalendarState = {
  view: string;
  selectedMonth: number;
  daysOfMonth: string[];
  selectedDay: string;
}

const initialState: CalendarState = {
  view: "month",
  selectedMonth: currentDate.getMonth(),
  daysOfMonth: [],
  selectedDay: ""
}

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth += action.payload;
    },
    setDaysOfMonth: (state, action) => {
      state.daysOfMonth = action.payload
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    }
  }
})

export default calendarSlice.reducer;
export const { setView, setSelectedMonth, setDaysOfMonth, setSelectedDay } = calendarSlice.actions;

export type RootStateCalendar = {
  calendar: CalendarState
}