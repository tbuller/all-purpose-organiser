import React from 'react';
import { useState, useEffect } from 'react';
import MyFriends from './MyFriends';

const Social = () => {

  const [viewPage, setViewPage] = useState("");

  return (
    <div className="social-page-container">
      <span className="buttons-line-container">
        <button className="view-myfriends-button" onClick={() => setViewPage("myfriends")}>View friends</button>
      </span>
      {viewPage === "myfriends" && <MyFriends />}
    </div>
  )
}

export default Social;