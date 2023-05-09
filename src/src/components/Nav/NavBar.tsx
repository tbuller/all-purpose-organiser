import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateNav } from '../../redux/navSlice';
import { setViewedComponent } from '../../redux/navSlice';
import { BsFillCalendarFill } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { GrNotes } from 'react-icons/gr'
import { FaUserFriends } from 'react-icons/fa';
import '../../styling/Nav/NavBar.scss';

const NavBar = () => {

  const dispatch = useDispatch();
  const viewedComponent = useSelector((state: RootStateNav) => state.nav.viewedComponent);

  const handleSetComponent = (component: string) => {
    dispatch(setViewedComponent(component));
  }

  return (
    <div className="nav-bar-container">
      <button className={`nav-bar-button${viewedComponent === "calendar" ? " selected" : ""}`} onClick={() => handleSetComponent("calendar")}><BsFillCalendarFill className="calendar-icon" /></button>
      <button className={`nav-bar-button${viewedComponent === "shopping" ? " selected" : ""}`} onClick={() => handleSetComponent("shopping")}><GiShoppingCart className="shopping-icon" /></button>
      <button className={`nav-bar-button${viewedComponent === "notes" ? " selected" : ""}`} onClick={() => handleSetComponent("notes")}><GrNotes className="notes-icon" /></button>
      <button className={`nav-bar-button${viewedComponent === "social" ? " selected" : ""}`} onClick={() => handleSetComponent("social")}><FaUserFriends className="social-icon" /></button>
    </div>
  )
}

export default NavBar;