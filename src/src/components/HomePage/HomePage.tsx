import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';

interface HomePageProps {
  navigate: ReturnType<typeof useNavigate>;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);

  return (
    <div className="home-page-container">
      {loggedInUser !== null && <div>{`logged in as ${loggedInUser.username}`}</div>}
    </div>
  )
}

export default HomePage;