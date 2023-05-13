import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootStateInvites } from '../../redux/invitesSlice';
import { setInvites } from '../../redux/invitesSlice';

const Invites = () => {

  const dispatch = useDispatch();
  const invites = useSelector((state: RootStateInvites) => state.invites.invites);

  useEffect(() => {
    fetch("http://localhost:8080/invites")
      .then(response => response.json())
      .then(data => {
        dispatch(setInvites(data.invites));
      })
  }, [])

  return (
    <div className="invites-container">

    </div>
  )
}

export default Invites;