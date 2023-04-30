import React from 'react';
import { useState, useEffect } from 'react';
import { Event } from '../../redux/calendarSlice';

interface DaysEventsProps {
  event: Event;
}

const DaysEvents: React.FC<DaysEventsProps> = ({ event }) => {

  return (
    <div className="days-events-container">

    </div>
  )
}

export default DaysEvents;