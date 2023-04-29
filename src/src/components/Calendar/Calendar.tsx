import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { setView } from '../../redux/calendarSlice';
import { setSelectedMonth } from '../../redux/calendarSlice';
import Day from './Day';
import Week from './Week';
import Month from './Month';
import '../../styling/Calendar/Calendar.scss';

const Calendar = () => {

  const dispatch = useDispatch();
  const view = useSelector((state: RootStateCalendar) => state.calendar.view);

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