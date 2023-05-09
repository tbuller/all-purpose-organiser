import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateSocial } from '../../redux/socialSlice';
import { setMyReceivedRequests } from '../../redux/socialSlice';

const ReceivedRequests = () => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const myReceivedRequests = useSelector((state: RootStateSocial) => state.social.myReceivedRequests);

  useEffect(() => {
    fetch("http://localhost:8080/requests")
      .then(response => response.json())
      .then(data => {
        dispatch(setMyReceivedRequests({ loggedInUserId: loggedInUser?._id, requests: data.requests }))
      })
  }, [])

  useEffect(() => {
    console.log(myReceivedRequests);
  }, [myReceivedRequests])

  return (
    <div className="received-requests-container">

    </div>
  )
}

export default ReceivedRequests;