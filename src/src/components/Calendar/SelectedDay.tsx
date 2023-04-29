import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { unsetSelectedDay } from '../../redux/calendarSlice';
import EventForm from './EventForm'; 

const SelectedDay = () => {

  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);

  const [showForm, setShowForm] = useState(false);

  const handleBackToCalendar = () => {
    dispatch(unsetSelectedDay);
  }

  return (
    <div className="selected-day-container">
      <button onClick={handleBackToCalendar}>Back to calendar</button>
      <button onClick={() => setShowForm(!showForm)}>Add a new event</button>
      {showForm && <EventForm />}
      <div className="day-info">

      </div>
    </div>
  )
}

export default SelectedDay;