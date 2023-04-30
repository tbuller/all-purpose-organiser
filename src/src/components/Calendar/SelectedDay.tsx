import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { unsetSelectedDay } from '../../redux/calendarSlice';
import EventForm from './EventForm'; 
import '../../styling/Calendar/SelectedDay.scss';

const SelectedDay = () => {

  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);
  const isDaySelected = useSelector((state: RootStateCalendar) => state.calendar.isDaySelected);

  const [showForm, setShowForm] = useState(false);

  const handleBackToCalendar = () => {
    dispatch(unsetSelectedDay({}));
  }

  return (
    <div className="selected-day-container">
      <button onClick={handleBackToCalendar}>Back to calendar</button>
      <button onClick={() => setShowForm(!showForm)}>{showForm ? "Close event form" : "Open event form"}</button>
      <div className="event-form-wrapper">
      {showForm && <EventForm />}
      </div>
      <div className="day-info">

      </div>
    </div>
  )
}

export default SelectedDay;