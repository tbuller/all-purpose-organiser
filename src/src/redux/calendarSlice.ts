import { createSlice } from '@reduxjs/toolkit';

const currentDate = new Date();

const todaysDate =  new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).format(currentDate);

const getWeek = (date: any) => {
  const tempDate: any = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayNum = tempDate.getDay() || 7;
  tempDate.setDate(tempDate.getDate() + 4 - dayNum);
  const yearStart: any = new Date(tempDate.getFullYear(), 0, 1);
  return Math.ceil((((tempDate - yearStart) / 86400000) + 1)/7);
}

export type Event = {
  creatorId: string;
  day: string;
  people: string;
  time: string;
  title: string;
  type: string;
  _id: string;
}

type CalendarState = {
  view: string;
  selectedMonth: number;
  selectedWeek: number;
  daysOfMonth: string[];
  daysOfWeek: string[];
  selectedDay: string;
  isDaySelected: boolean;
  todaysDate: string;
  events: Event[];
}

const initialState: CalendarState = {
  view: "month",
  selectedMonth: currentDate.getMonth(),
  selectedWeek: getWeek(currentDate),
  daysOfMonth: [],
  daysOfWeek: [],
  selectedDay: "",
  isDaySelected: false,
  todaysDate: todaysDate,
  events: []
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
    setDaysOfWeek: (state, action) => {
      state.daysOfWeek = action.payload
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
      state.isDaySelected = true;
    },
    unsetSelectedDay: (state, action) => {
      state.selectedDay = "";
      state.isDaySelected = false;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(event => event._id !== action.payload._id);
    }
  }
})

export default calendarSlice.reducer;
export const { setView, setSelectedMonth, setDaysOfMonth, setDaysOfWeek, setSelectedDay, unsetSelectedDay, setEvents, addEvent, removeEvent } = calendarSlice.actions;

export type RootStateCalendar = {
  calendar: CalendarState
}