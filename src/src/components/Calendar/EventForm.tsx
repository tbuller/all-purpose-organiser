import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';

const EventForm = () => {

  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  }

  const handlePeople = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(event.target.value);
  }

  const handleTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  }

  return (
    <div className="event-form-container">
      <label className="event-form-label">Event title:</label>
      <input className="event-form-input" type="text" onChange={handleTitle} />
      <label className="event-form-label">Event type:</label>
      <input className="event-form-input" type="text" onChange={handleType} />
      <label className="event-form-label">invite people (optional):</label>
      <input className="event-form-input" type="text" onChange={handlePeople} />
      <label className="event-form-label">Select a time:</label>
      <input className="event-form-input" type="text" onChange={handleTime} />
      <button>Create event</button>
    </div>
  )
}

export default EventForm;