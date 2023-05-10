import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateSocial, Friend } from '../../redux/socialSlice';
import { setMySentRequests, setFriends } from '../../redux/socialSlice';
import '../../styling/Social/SentRequests.scss';

const SentRequests = () => {

  const dispatch = useDispatch();
  const users = useSelector((state: RootStateUsers) => state.users.users);
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const myFriends = useSelector((state: RootStateSocial) => state.social.myFriends);
  const mySentRequests = useSelector((state: RootStateSocial) => state.social.mySentRequests);

  useEffect(() => {
    fetch("http://localhost:8080/requests")
      .then(response => response.json())
      .then(data => {
        dispatch(setMySentRequests({ loggedInUserId: loggedInUser?._id, requests: data.requests }));
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/friends")
      .then(response => response.json())
      .then(data => {
        setFriends({ loggedInUserId: loggedInUser?._id, friends: data.friends });
      })
  }, [])

  useEffect(() => {
    console.log(myFriends);
  }, [myFriends])

  return (
    <div className="sent-requests-container">
      {mySentRequests.map(request => (
        <div className="individual-request-container" key={request._id}>
          <p className="requestee-username">{users.find(user => user._id === request.requesteeId)?.username}</p>
          <p className="sent-request-status">{myFriends.find((friend: Friend | any) => friend.accepterId === request.requesteeId) ? "Request accepted" : "Request sent"}</p>
        </div>
      ))}
    </div>
  )
}

export default SentRequests;