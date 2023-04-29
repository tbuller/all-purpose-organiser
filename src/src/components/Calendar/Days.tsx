import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { setSelectedDay } from '../../redux/calendarSlice';
import '../../styling/Calendar/Days.scss'

const Days = () => {

  const dispatch = useDispatch();
  const daysOfMonth = useSelector((state: RootStateCalendar) => state.calendar.daysOfMonth);

  const handleDaySelect = (day: string) => {
    dispatch(setSelectedDay(day));
  }

  return (
    <div className="calendar-days-container">
      {daysOfMonth.map(day =>
        <div className="individual-day-container" key={day} onClick={() => handleDaySelect(day)}>
          <span className="day-info-container">
          <p className="day-number">{day.substring(9, 11)[1] === "," ? day.substring(9, 10) : day.substring(9, 11)}</p>
          <p className="day-of-the-week">{day.substring(0, 3)}</p>
          </span>
        </div>
        )}
    </div>
  )
}

export default Days;