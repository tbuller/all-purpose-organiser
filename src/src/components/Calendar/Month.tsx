import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { setSelectedMonth } from '../../redux/calendarSlice';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
      <p className="month-name-text">{monthNames[selectedMonth]}</p>
      <div className="month-navigation-buttons-container">
      <button className="month-arrow-button" onClick={() => handleSelectedMonthChange(-1)}><AiOutlineArrowLeft /></button>
      <button className="month-arrow-button" onClick={() => handleSelectedMonthChange(1)}><AiOutlineArrowRight /></button>
      </div>
    </div>
  )
}

export default Month;