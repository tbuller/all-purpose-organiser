import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { setView } from '../../redux/calendarSlice';
import { setDaysOfMonth, setDaysOfWeek, setEvents } from '../../redux/calendarSlice';
import Month from './Month';
import Week from './Week';
import SelectedDay from './SelectedDay';
import '../../styling/Calendar/Calendar.scss';

const Calendar = () => {

  const dispatch = useDispatch();
  const view = useSelector((state: RootStateCalendar) => state.calendar.view);
  const selectedMonth = useSelector((state: RootStateCalendar) => state.calendar.selectedMonth);
  const selectedWeek = useSelector((state: RootStateCalendar) => state.calendar.selectedWeek);
  const isDaySelected = useSelector((state: RootStateCalendar) => state.calendar.isDaySelected);

  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then(response => response.json())
      .then(data => {
        dispatch(setEvents(data.events));
      })
  }, [])

  useEffect(() => {
    getDaysOfMonth();
  }, [selectedMonth])

  useEffect(() => {
    getDaysOfWeek(selectedWeek);
  }, [selectedWeek])

  const getDaysOfMonth = () => {
    const startDate = new Date(2023, selectedMonth, 1);
    const endDate = new Date(2023, selectedMonth + 1, 0);
    const days = [];

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Date(date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
    }
    
    dispatch(setDaysOfMonth(days));
  }

  const getDaysOfWeek = (selectedWeek: number) => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const startOfWeek = new Date(startOfYear.getTime() + (selectedWeek - 1) * 7 * 24 * 60 * 60 * 1000);
    const dayOfWeek = startOfWeek.getDay();

    startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);
    startOfWeek.setHours(0, 0, 0, 0);

    const days = Array.from({length: 7}, (val, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  });

    dispatch(setDaysOfWeek(days));
  }

  const handleViewChange = (timeFrame: string) => {
    dispatch(setView(timeFrame));
  }

  return (
    <div className="calendar-container">
      {isDaySelected || <div className="calendar-view-buttons-container">
        <button className="calendar-view-button" onClick={() => handleViewChange("month")}>Month</button>
        <button className="calendar-view-button" onClick={() => handleViewChange("week")}>Week</button>
      </div>}
        {(view === "month" && !isDaySelected) && <Month />}
        {(view === "week" && !isDaySelected) && <Week />}
        {isDaySelected && <SelectedDay />}      
    </div>
  )
}

export default Calendar;