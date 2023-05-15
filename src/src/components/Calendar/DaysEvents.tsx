import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Event } from '../../redux/calendarSlice';
import { removeEvent } from '../../redux/calendarSlice';
import '../../styling/Calendar/DaysEvents.scss';

interface DaysEventsProps {
  events: Event[];
}

const DaysEvents: React.FC<DaysEventsProps> = ({ events }) => {

  const dispatch = useDispatch();

  const handleRemoveEvent = (event: Event) => {
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

  useEffect(() => {
    console.log(events);
  }, [])

  return (
    <div className="days-events-container">
      <div className="events-wrapper">
      {events
      .sort((a, b) => {
        const [aHours, aMinutes] = a.time.split(':').map(Number);
        const [bHours, bMinutes] = b.time.split(':').map(Number);
    
        const aTotalMinutes = aHours * 60 + aMinutes;
        const bTotalMinutes = bHours * 60 + bMinutes;
    
        return aTotalMinutes - bTotalMinutes;
      })
      .map(event =>
        <div className={`individual-event-container ${event.type}`} key={event._id} >
          <div className="event-title">{event.title}</div>
          <div className="event-time">{event.time}</div>
          <button className="delete-event-button-days-events" onClick={() => handleRemoveEvent(event)}>Delete event</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default DaysEvents;