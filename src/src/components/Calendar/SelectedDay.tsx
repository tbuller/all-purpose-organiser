import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { unsetSelectedDay } from '../../redux/calendarSlice';

const SelectedDay = () => {

  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);

  const handleBackToCalendar = () => {
    dispatch(unsetSelectedDay);
  }

  return (
    <div className="selected-day-container">
      <button onClick={handleBackToCalendar}>Back to calendar</button>
    </div>
  )
}

export default SelectedDay;