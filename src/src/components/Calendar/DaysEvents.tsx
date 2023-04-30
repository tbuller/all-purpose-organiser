import React from 'react';
import { useState, useEffect } from 'react';
import { Event } from '../../redux/calendarSlice';
import '../../styling/Calendar/DaysEvents.scss';

interface DaysEventsProps {
  events: Event[];
}

const DaysEvents: React.FC<DaysEventsProps> = ({ events }) => {

  const colourMapping = {
    "meeting": "gray",
    "workout_exercise": "red"
  }

  return (
    <div className="days-events-container">
      {events.map(event =>
        <div className="individual-event-container" key={event._id}>

        </div>
        )}
    </div>
  )
}

export default DaysEvents;