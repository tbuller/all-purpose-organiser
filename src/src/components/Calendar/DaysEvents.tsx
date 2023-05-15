import React from 'react';
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

  return (
    <div className="days-events-container">
      <div className="events-wrapper">
      {events.map(event =>
        <div className={`individual-event-container ${event.type}`} key={event._id} >
          <div className="event-title">{event.title}</div>
          <button onClick={() => handleRemoveEvent(event)}>Delete event</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default DaysEvents;