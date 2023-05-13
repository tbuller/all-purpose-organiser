import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateCalendar, Event } from '../../redux/calendarSlice';
import { unsetSelectedDay } from '../../redux/calendarSlice';
import { RootStateInvites, Invite } from '../../redux/invitesSlice';
import EventForm from './EventForm'; 
import DaysEvents from './DaysEvents';
import '../../styling/Calendar/SelectedDay.scss';

const SelectedDay = () => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const selectedDay = useSelector((state: RootStateCalendar) => state.calendar.selectedDay);
  const isDaySelected = useSelector((state: RootStateCalendar) => state.calendar.isDaySelected);
  const myDaysEvents = useSelector((state: RootStateCalendar) => state.calendar.events.filter((event: Event) => event.day === selectedDay && event.creatorId === loggedInUser?._id));
  const myDaysInvites = useSelector((state: RootStateInvites) => state.invites.invites.length > 1 && state.invites.invites.filter((invite: Invite) => invite.inviteDay === selectedDay && invite.inviteeId === loggedInUser?._id));

  const [showForm, setShowForm] = useState(false);

  const handleBackToCalendar = () => {
    dispatch(unsetSelectedDay({}));
  }

  return (
    <div className="selected-day-container">
      <button onClick={handleBackToCalendar}>Back to calendar</button>
      <button onClick={() => setShowForm(!showForm)}>{showForm ? "Close event form" : "Open event form"}</button>
      <div className="event-form-wrapper">
      {showForm && <EventForm />}
      </div>
      <div className="day-info">
        {myDaysEvents.length > 0 && <DaysEvents events={myDaysEvents} invites={myDaysInvites} />}
      </div>
    </div>
  )
}

export default SelectedDay;