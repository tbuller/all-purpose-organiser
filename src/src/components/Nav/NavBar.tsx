import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateNav } from '../../redux/navSlice';
import { setViewedComponent } from '../../redux/navSlice';

const NavBar = () => {

  const dispatch = useDispatch();
  const viewedComponent = useSelector((state: RootStateNav) => state.nav.viewedComponent);

  const handleSetComponent = (component: string) => {
    dispatch(setViewedComponent(component));
  }

  return (
    <div className="nav-bar-container">
      <button className="nav-bar-button">Calendar</button>
      <button className="nav-bar-button">Shopping</button>
    </div>
  )
}

export default NavBar;