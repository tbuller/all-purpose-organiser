import { createSlice } from '@reduxjs/toolkit';

const currentDate = new Date();

type CalendarState = {
  view: string;
  selectedMonth: number;
}

const initialState: CalendarState = {
  view: "month",
  selectedMonth: currentDate.getMonth()
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
    }
  }
})

export default calendarSlice.reducer;
export const { setView, setSelectedMonth } = calendarSlice.actions;

export type RootStateCalendar = {
  calendar: CalendarState
}