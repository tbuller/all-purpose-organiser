import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';

const EventForm = () => {

  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState("");

  return (
    <div className="event-form-container">
      <label className="event-form-label">Event title:</label>
      <input className="event-form-input" type="text" />
      <label className="event-form-label">Event type:</label>
      <input className="event-form-input" type="text" />
      <label className="event-form-label">invite people (optional):</label>
      <input className="event-form-input" type="text" />
      <label className="event-form-label">Select a time:</label>
      <input className="event-form-input" type="text" />
    </div>
  )
}

export default EventForm;