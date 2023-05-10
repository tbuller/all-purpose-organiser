import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers, User } from '../../redux/usersSlice';
import { setUsers } from '../../redux/usersSlice';
import { RootStateSocial } from '../../redux/socialSlice';
import { setMySentRequests, addMySentRequest } from '../../redux/socialSlice';
import '../../styling/Social/SearchFriends.scss';

const SearchFriends = () => {

  const dispatch = useDispatch();
  const users = useSelector((state: RootStateUsers) => state.users.users);
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const mySentRequests = useSelector((state: RootStateSocial) => state.social.mySentRequests);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState(users);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data.users));
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/requests")
      .then(response => response.json())
      .then(data => {
        dispatch(setMySentRequests({ loggedInUserId: loggedInUser?._id, requests: data.requests }));
      })
  }, [])

  useEffect(() => {
    setFilteredResults(users.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(filteredResults);
  }

  const sendRequest = (user: User) => {
    const requestAlreadySent = mySentRequests.find(request => request.requesteeId === user._id);
    if (requestAlreadySent) {
      console.log("request already sent");
    } else {
      fetch("http://localhost:8080/requests", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ requesterId: loggedInUser?._id, requesteeId: user._id })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(addMySentRequest(data.request));
      })
    }
  }

  return (
    <div className="search-friends-container">
      <input className="search-bar-input" type="text" placeholder="find friends..." value={searchTerm} onChange={handleInputChange} />
      {searchTerm && (
        <ul className="search-friends-drop-down">
          {filteredResults.slice(0, 5).map((user) => (
            <li className="search-friends-drop-down-item" key={user._id}>
              <p className="drop-down-username">{user.username}</p>
              <button className="drop-down-button" onClick={() => sendRequest(user)}>{mySentRequests.find(request => request.requesteeId === user._id) ? "Request sent" : "Connect"}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchFriends;