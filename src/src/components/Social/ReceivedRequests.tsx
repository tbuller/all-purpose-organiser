import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateSocial, Friend, Request } from '../../redux/socialSlice';
import { setMyReceivedRequests, setFriends, addFriend } from '../../redux/socialSlice';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const ReceivedRequests = () => {

  const dispatch = useDispatch();
  const users = useSelector((state: RootStateUsers) => state.users.users);
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const myReceivedRequests = useSelector((state: RootStateSocial) => state.social.myReceivedRequests);
  const myFriends = useSelector((state: RootStateSocial) => state.social.myFriends);

  useEffect(() => {
    console.log(myFriends);
  }, [myFriends])

  useEffect(() => {
    fetch("http://localhost:8080/requests")
      .then(response => response.json())
      .then(data => {
        dispatch(setMyReceivedRequests({ loggedInUserId: loggedInUser?._id, requests: data.requests }))
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/friends")
      .then(response => response.json())
      .then(data => {
        dispatch(setFriends({ loggedInUserId: loggedInUser?._id, friends: data.friends }));
      })
  }, [])

  const acceptRequest = (request: Request) => {
    fetch("http://localhost:8080/friends", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ requesterId: request.requesterId, accepterId: request.requesteeId })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(addFriend(data.friend));
      })
  }

  return (
    <div className="received-requests-container">
      {myReceivedRequests.map(request => (
        <div className="individual-received-request-container" key={request._id}>
          <p className="requester-username">{users.find(user => user._id === request.requesterId)?.username}</p>
          <button className="accept-request-button" onClick={() => acceptRequest(request)}>{myFriends ? myFriends.find((friend: Friend | any) => friend.requesterId === request.requesterId) ? "Request accepted" : "Accept request" : "Accept request"}</button>
        </div>
      ))}
    </div>
  )
}

export default ReceivedRequests;