import React from 'react';
import { useState, useEffect } from 'react';
import MyFriends from './MyFriends';
import SearchFriends from './SearchFriends';

const Social = () => {

  const [viewPage, setViewPage] = useState("");

  return (
    <div className="social-page-container">
      <span className="buttons-line-container">
        <button className="view-myfriends-button" onClick={() => setViewPage("myfriends")}>View friends</button>
        <button className="seach-friends-button" onClick={() => setViewPage("searchfriends")}>Search for friends</button>
      </span>
      {viewPage === "myfriends" && <MyFriends />}
      {viewPage === "searchfriends" && <SearchFriends />}
    </div>
  )
}

export default Social;