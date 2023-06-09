import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { User } from '../../redux/usersSlice';
import { setLoggedInUser } from '../../redux/usersSlice';
import { RootStateNav } from '../../redux/navSlice';
import NavBar from '../Nav/NavBar';
import Calendar from '../Calendar/Calendar';
import Shopping from '../Shopping/Shopping'
import Notes from '../Notes/Notes';
import Social from '../Social/Social';
import '../../styling/HomePage/HomePage.scss';

interface HomePageProps {
  navigate: ReturnType<typeof useNavigate>;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const viewedComponent = useSelector((state: RootStateNav) => state.nav.viewedComponent);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => {
        const relevantUser = data.users.find((user: User) => user._id === localStorage.getItem("userId"));
        dispatch(setLoggedInUser(relevantUser));
      })
  }, [])

  return (
    <div className="home-page-container">
      <NavBar />
      {viewedComponent === "calendar" && <Calendar />}
      {viewedComponent === "shopping" && <Shopping />}
      {viewedComponent === "notes" && <Notes />}
      {viewedComponent === "social" && <Social />}
    </div>
  )
}

export default HomePage;