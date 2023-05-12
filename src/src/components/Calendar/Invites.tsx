import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { RootStateInvites } from '../../redux/invitesSlice';
import { setInvites } from '../../redux/invitesSlice';

const Invites = () => {

  const invites = useSelector((state: RootStateInvites) => state.invites.invites);

  return (
    <div className="invites-container">

    </div>
  )
}

export default Invites;