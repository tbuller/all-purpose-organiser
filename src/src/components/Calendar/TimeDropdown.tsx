import React from 'react';
import { useState, useEffect } from 'react';

interface TimeDropdownProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TimeDropdown: React.FC<TimeDropdownProps> = ({ onChange }) => {

  const generateTimeOptions = () => {
    const timeOptions = [];

    for (let hour = 0; hour < 24; hour++) {
      for (let minute= 0; minute < 60; minute += 15) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute < 10 ? `0${minute}` : minute;
        const time = `${formattedHour}:${formattedMinute}`;
        timeOptions.push(
          <option key={time} value={time}>
            {time}
          </option>
        )
      }
    }

    return timeOptions;
  }

  return (
    <select className="event-form-time-select" onChange={onChange}>
      {generateTimeOptions()}
    </select>
  )
}

export default TimeDropdown;