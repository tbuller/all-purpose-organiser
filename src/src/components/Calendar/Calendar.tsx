import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { setView } from '../../redux/calendarSlice';
import { setSelectedMonth, setDaysOfMonth } from '../../redux/calendarSlice';
import Week from './Week';
import Month from './Month';
import '../../styling/Calendar/Calendar.scss';

const Calendar = () => {

  const dispatch = useDispatch();
  const view = useSelector((state: RootStateCalendar) => state.calendar.view);
  const selectedMonth = useSelector((state: RootStateCalendar) => state.calendar.selectedMonth);

  useEffect(() => {
    getDaysOfMonth();
  }, [selectedMonth])

  const getDaysOfMonth = () => {
    const startDate = new Date(2023, selectedMonth, 1);
    const endDate = new Date(2023, selectedMonth + 1, 0);
    const days = [];

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Date(date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
    }
    
    dispatch(setDaysOfMonth(days));
  }

  const handleViewChange = (timeFrame: string) => {
    dispatch(setView(timeFrame));
  }

  return (
    <div className="calendar-container">
      <div className="calendar-view-buttons-container">
        <button className="calendar-view-button" onClick={() => handleViewChange("month")}>Month</button>
        <button className="calendar-view-button" onClick={() => handleViewChange("week")}>Week</button>
        {view === "month" && <Month />}
      </div>
    </div>
  )
}

export default Calendar;