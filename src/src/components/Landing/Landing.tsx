import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../redux/usersSlice'
import '../../styling/Landing/Landing.scss';

interface LandingProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Landing: React.FC<LandingProps> = ({ navigate }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data.users));
      })
  }, [])

  const navigateLogin = () => {
    navigate("/login");
  }

  const navigateSignup = () => {
    navigate("/signup");
  }

  return (
    <div className="landing-page-container">
      <h1 className="landing-welcome-message">Welcome to all-purpose-organiser</h1>
      <button className="landing-page-button" onClick={navigateLogin}>Login</button>
      <button className="landing-page-button" onClick={navigateSignup}>Sign up</button>
    </div>
  )
}

export default Landing;