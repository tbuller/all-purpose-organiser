import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { addEvent } from '../../redux/calendarSlice';
import { RootStateUsers } from '../../redux/usersSlice';
import '../../styling/Calendar/EventForm.scss';

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

  const handleType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    console.log(type);
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
      <select className="event-form-select" onChange={handleType}>
        <option className="event-form-option" value="meeting">Meeting</option>
        <option className="event-form-option" value="social_event">Social Event</option>
        <option className="event-form-option" value="appointment">Appointment</option>
        <option className="event-form-option" value="workout_exercise">Workout / Exercise</option>
        <option className="event-form-option" value="educational">Educational</option>
        <option className="event-form-option" value="celebration">Celebration</option>
        <option className="event-form-option" value="reminder">Reminder</option>
        <option className="event-form-option" value="travel">Travel</option>
        <option className="event-form-option" value="entertainment">Entertainment</option>
        <option className="event-form-option" value="religious_spiritual">Religious / Spiritual</option>
      </select>
      <label className="event-form-label">invite people (optional):</label>
      <input className="event-form-input" type="text" onChange={handlePeople} />
      <label className="event-form-label">Select a time:</label>
      <input className="event-form-input" type="text" onChange={handleTime} />
      <button className="event-form-create-event-button" onClick={createEvent}>Create event</button>
    </div>
  )
}

export default EventForm;