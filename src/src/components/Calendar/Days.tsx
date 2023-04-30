import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateCalendar, Event } from '../../redux/calendarSlice';
import { setSelectedDay, removeEvent } from '../../redux/calendarSlice';
import { setLoggedInUser } from '../../redux/usersSlice';
import '../../styling/Calendar/Days.scss'

const Days = () => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const daysOfMonth = useSelector((state: RootStateCalendar) => state.calendar.daysOfMonth);
  const todaysDate = useSelector((state: RootStateCalendar) => state.calendar.todaysDate);
  const events = useSelector((state: RootStateCalendar) => state.calendar.events);

  const handleRemoveEvent = (event: Event, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    fetch("http://localhost:8080/events", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: event._id })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(removeEvent(data.event));
      })
  }
  
  const handleDaySelect = (day: string) => {
    dispatch(setSelectedDay(day));
  }

  return (
    <div className="calendar-days-container">
      {daysOfMonth.map(day =>
        <div className="individual-day-container" key={day} onClick={() => handleDaySelect(day)}>
          <span className="day-info-container">
          <p className={`day-number${todaysDate === day ? " selected" : ""}`}>{day.substring(9, 11)[1] === "," ? day.substring(9, 10) : day.substring(9, 11)}</p>
          <p className="day-of-the-week">{day.substring(0, 3)}</p>
          </span>
          <div className="day-component-events-container">
            {events.filter(event => event.day === day && event.creatorId === loggedInUser?._id).map(event => 
              <span className="day-component-individual-event-container" key={event._id}>
                <p className="day-component-event-title">{event.title}</p>
                <p className="day-component-event-time">{event.time}</p>
                <button className="day-component-event-button" onClick={(e) => handleRemoveEvent(event, e)}>X</button>
              </span>  
              )}
          </div>
        </div>
        )}
    </div>
  )
}

export default Days;