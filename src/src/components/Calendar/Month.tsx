import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { setSelectedMonth } from '../../redux/calendarSlice';

const Month = () => {

  const dispatch = useDispatch();
  const selectedMonth = useSelector((state: RootStateCalendar) => state.calendar.selectedMonth);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    console.log(monthNames[selectedMonth]);
  }, [selectedMonth])

  const handleSelectedMonthChange = (direction: number) => {
    dispatch(setSelectedMonth(direction));
  }

  return (
    <div className="calendar-month-container">
      <button className="month-arrow-button" onClick={() => handleSelectedMonthChange(-1)}>L</button>
      <button className="month-arrow-button" onClick={() => handleSelectedMonthChange(1)}>R</button>
    </div>
  )
}

export default Month;