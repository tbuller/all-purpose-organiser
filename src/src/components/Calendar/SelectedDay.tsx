import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateCalendar, Event } from '../../redux/calendarSlice';
import { unsetSelectedDay } from '../../redux/calendarSlice';
import EventForm from './EventForm'; 
import DaysEvents from './DaysEvents';
import '../../styling/Calendar/SelectedDay.scss';

const SelectedDay = () => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);
  const myDaysEvents = useSelector((state: RootStateCalendar) => state.calendar.events.filter((event: Event) => event?.day === selectedDay && event.creatorId === loggedInUser?._id));

  const [showForm, setShowForm] = useState(false);

  const handleBackToCalendar = () => {
    dispatch(unsetSelectedDay({}));
  }

  return (
    <div className="selected-day-container">
      <button className="back-to-calendar-button" onClick={handleBackToCalendar}>Back to calendar</button>
      <button className="toggle-event-form-button" onClick={() => setShowForm(!showForm)}>{showForm ? "Close event form" : "Add an event"}</button>
      <div className="event-form-wrapper">
      {showForm && <EventForm setShowForm={setShowForm} />}
      </div>
      <div className="selected-day-info-container">
        <h2 className="selected-day-header">{selectedDay}</h2>
        <h3 className="selected-day-events-header">Events</h3>
        {myDaysEvents.length > 0 ? <DaysEvents events={myDaysEvents} /> : <p className="no-events-message">You have no events on this day</p>}
      </div>
    </div>
  )
}

export default SelectedDay;