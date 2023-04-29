import React from 'react';
import { useState, useEffect } from 'react';
import '../../styling/Calendar/Calendar.scss';

const Calendar = () => {

  const [calendarView, setCalendarView] = useState("");

  const handleViewChange = (timeFrame: string) => {
    setCalendarView(timeFrame);
  }

  return (
    <div className="calendar-container">
      <div className="calendar-view-buttons-container">
        <button className="calendar-view-button" onClick={() => handleViewChange("month")}>Month</button>
        <button className="calendar-view-button" onClick={() => handleViewChange("week")}>Week</button>
      </div>
    </div>
  )
}

export default Calendar;