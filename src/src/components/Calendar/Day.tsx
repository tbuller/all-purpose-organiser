import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';

const Day = () => {

  const dispatch = useDispatch();
  const selectedMonth = useSelector((state: RootStateCalendar) => state.calendar.selectedMonth);
  const daysOfMonth = useSelector((state: RootStateCalendar) => state.calendar.daysOfMonth);

  return (
    <div className="calendar-day-container">

    </div>
  )
}

export default Day;