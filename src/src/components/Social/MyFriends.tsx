import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers, User } from '../../redux/usersSlice';
import { RootStateSocial, Friend } from '../../redux/socialSlice';
import { setFriends } from '../../redux/socialSlice';

const MyFriends = () => {

  const dispatch = useDispatch();
  const myFriends = useSelector((state: RootStateSocial) => state.social.myFriends);
  const users = useSelector((state: RootStateUsers) => state.users.users);
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);

  useEffect(() => {
    fetch("http://localhost:8080/friends")
      .then(response => response.json())
      .then(data => {
        dispatch(setFriends({ loggedInUserId: loggedInUser?._id, friends: data.friends }));
      })
  }, [])

  return (
    <div className="myfriends-container">
      {myFriends && myFriends.map((friend: Friend | any) => (
        <div className="individual-friend-container" key={friend._id}>
          <p>{users.find((user: User) => (user._id === friend.requesterId || user._id === friend.accepterId) && user._id !== loggedInUser?._id)?.username}</p>
        </div>
      ))}
    </div>
  )
}

export default MyFriends;