import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';

const SelectedDay = () => {

  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);

  return (
    <div className="selected-day-container">

    </div>
  )
}

export default SelectedDay;