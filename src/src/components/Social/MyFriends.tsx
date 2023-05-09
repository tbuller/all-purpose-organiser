import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStateSocial } from '../../redux/socialSlice';

const MyFriends = () => {

  const myFriends = useSelector((state: RootStateSocial) => state.social.myFriends);

  return (
    <div className="myfriends-container">
      my friends
    </div>
  )
}

export default MyFriends;