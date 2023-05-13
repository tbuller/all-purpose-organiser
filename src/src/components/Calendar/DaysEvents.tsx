import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateCalendar } from '../../redux/calendarSlice';
import { Event } from '../../redux/calendarSlice';
import { Invite } from '../../redux/invitesSlice';
import { removeEvent } from '../../redux/calendarSlice';
import '../../styling/Calendar/DaysEvents.scss';

interface DaysEventsProps {
  events: Event[];
  invites: Invite[];
}

const DaysEvents: React.FC<DaysEventsProps> = ({ events, invites }) => {

  const dispatch = useDispatch();
  const allEvents = useSelector((state: RootStateCalendar) => state.calendar.events);

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
      <div className="invites-wrapper">
        {invites.map(invite => allEvents.find((event: Event) => event._id === invite.eventId) &&
          <div className="individual-invite-container" key={event._id}>
            <div className="invite-title">{event.title}</div>
          </div>  
          )}
      </div>  
    </div>
  )
}

export default DaysEvents;