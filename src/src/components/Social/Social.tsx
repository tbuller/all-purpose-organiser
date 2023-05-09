import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../redux/usersSlice';
import MyFriends from './MyFriends';
import SearchFriends from './SearchFriends';
import ReceivedRequests from './ReceivedRequests';

const Social = () => {

  const dispatch = useDispatch();

  const [viewPage, setViewPage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data.users));
      })
  }, [])

  return (
    <div className="social-page-container">
      <span className="buttons-line-container">
        <button className="view-myfriends-button" onClick={() => setViewPage("myfriends")}>View friends</button>
        <button className="seach-friends-button" onClick={() => setViewPage("searchfriends")}>Search for friends</button>
        <button className="received-requests-button" onClick={() => setViewPage("receivedrequests")}>View my received requests</button>
      </span>
      {viewPage === "myfriends" && <MyFriends />}
      {viewPage === "searchfriends" && <SearchFriends />}
      {viewPage === "receivedrequests" && <ReceivedRequests />}
    </div>
  )
}

export default Social;