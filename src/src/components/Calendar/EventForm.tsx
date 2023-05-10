import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { addEvent } from '../../redux/calendarSlice';
import { RootStateUsers, User } from '../../redux/usersSlice';
import { setUsers } from '../../redux/usersSlice';
import { RootStateSocial, Friend } from '../../redux/socialSlice';
import { setFriends } from '../../redux/socialSlice';
import TimeDropdown from './TimeDropdown';
import '../../styling/Calendar/EventForm.scss';

const EventForm = () => {

  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);
  const users = useSelector((state : RootStateUsers) => state.users.users);
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const myFriends = useSelector((state: RootStateSocial) => state.social.myFriends);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/friends")
      .then(response => response.json())
      .then(data => {
        dispatch(setFriends({ loggedInUserId: loggedInUser?._id, friends: data.friends }));
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data.users));
      })
  }, [])

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

  const handlePeople = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeople(event.target.value);
  }

  const handleTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(event.target.value);
    console.log(time);
  }

  return (
    <div className="event-form-container">
      <h3 className="event-form-date">{selectedDay}</h3>
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
      <select className="event-form-select" onChange={handlePeople}>
      <option value="">Select a friend</option>
      {myFriends.map((friend: Friend | any) => {
        const user = users.find((user: User | any) => (user._id === friend.requesterId || user._id === friend.accepterId) && user._id !== loggedInUser?._id);
        return (
        <option key={user?._id} value={user?._id}>
          {user?.username}
        </option>
        );
      })}
    </select>
      <label className="event-form-label">Select a time:</label>
      <TimeDropdown onChange={handleTime} />
      <button className="event-form-create-event-button" onClick={createEvent}>Create event</button>
    </div>
  )
}

export default EventForm;