import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';

const SearchFriends = () => {

  const users = useSelector((state: RootStateUsers) => state.users.users);

  return (
    <div className="search-friends-container">

    </div>
  )
}

export default SearchFriends;