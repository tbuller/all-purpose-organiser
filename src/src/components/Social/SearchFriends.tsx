import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { setUsers } from '../../redux/usersSlice';

const SearchFriends = () => {

  const dispatch = useDispatch();
  const users = useSelector((state: RootStateUsers) => state.users.users);

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
    setFilteredResults(users.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(filteredResults);
  }

  return (
    <div className="search-friends-container">
      <input className="search-bar-input" type="text" placeholder="find friends..." value={searchTerm} onChange={handleInputChange} />
      {searchTerm && (
        <ul className="search-friends-drop-down">
          {filteredResults.slice(0, 5).map((user) => (
            <li className="search-friends-drop-down-item" key={user._id}>
              {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchFriends;