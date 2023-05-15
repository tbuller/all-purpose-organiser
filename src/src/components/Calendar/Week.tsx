import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { setSelectedWeek } from '../../redux/calendarSlice';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import WeekDays from './WeekDays';
import '../../styling/Calendar/Week.scss';

const Week = () => {

  const dispatch = useDispatch();
  const daysOfWeek = useSelector((state: RootStateCalendar) => state.calendar.daysOfWeek);
  const selectedWeek = useSelector((state: RootStateCalendar) => state.calendar.selectedWeek);

  const handleSelectedWeekChange = (direction: number) => {
    dispatch(setSelectedWeek(direction));
  }

  return (
    <div className="week-container">
      <h2 className="week-title">Week name</h2>
      <div className="week-navigation-buttons-container">
        <button className="week-navigate-button" onClick={() => handleSelectedWeekChange(-1)}><AiOutlineArrowLeft /></button>
        <button className="week-navigate-button" onClick={() => handleSelectedWeekChange(1)}><AiOutlineArrowRight /></button>
      </div>
      <WeekDays />
    </div>
  )
}

export default Week;