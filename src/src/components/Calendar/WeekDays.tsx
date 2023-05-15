import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar, Event } from '../../redux/calendarSlice';
import { setSelectedDay, removeEvent } from '../../redux/calendarSlice';
import { RootStateUsers } from '../../redux/usersSlice';
import '../../styling/Calendar/WeekDays.scss';

const WeekDays = () => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const todaysDate = useSelector((state: RootStateCalendar) => state.calendar.todaysDate);
  const daysOfWeek = useSelector((state: RootStateCalendar) => state.calendar.daysOfWeek);
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
    <div className="calendar-week-days-container">
      {daysOfWeek.map(day => (
        <div className="individual-week-day-container" key={day} onClick={() => handleDaySelect(day)}>
          <span className="day-info-container">
            <p className={`day-number${todaysDate === day ? " selected" : ""}`}>{day.substring(9, 11)[1] === "," ? day.substring(9, 10) : day.substring(9, 11)}</p>
            <p className="day-of-the-week">{day.substring(0, 3)}</p>
          </span>
          <div className="day-component-events-container">
            {events.filter(event => event.day === day && event.creatorId === loggedInUser?._id)
            .sort((a, b) => {
              const [aHours, aMinutes] = a.time.split(':').map(Number);
              const [bHours, bMinutes] = b.time.split(':').map(Number);
          
              const aTotalMinutes = aHours * 60 + aMinutes;
              const bTotalMinutes = bHours * 60 + bMinutes;
          
              return aTotalMinutes - bTotalMinutes;
            })
            .map(event => 
              <span className={`day-component-individual-event-container ${event.type}`} key={event._id}>
                <p className="day-component-event-title">{event.title}</p>
                <button className="day-component-event-button" onClick={(e) => handleRemoveEvent(event, e)}>X</button>
              </span>  
              )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default WeekDays;