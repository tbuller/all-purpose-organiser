import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { addEvent } from '../../redux/calendarSlice';
import { RootStateUsers } from '../../redux/usersSlice';

const EventForm = () => {

  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");

  const createEvent = () => {
    fetch("http://localhost:8080/events", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ day: selectedDay, creatorId: loggedInUser?._id, title: title, type: type, people: people, time: time })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(addEvent(data.event));
      })
  }

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
      <button onClick={createEvent}>Create event</button>
    </div>
  )
}

export default EventForm;