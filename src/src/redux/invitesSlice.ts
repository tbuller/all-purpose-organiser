import { createSlice } from '@reduxjs/toolkit';

export type Invite = {
  _id: string;
  eventId: string;
  inviterId: string;
  inviteeId: string;
  inviteDay: string;
}

type InvitesState = {
  invites: Invite[];
}

const initialState: InvitesState = {
  invites: []
}

const invitesSlice = createSlice({
  name: 'invites',
  initialState,
  reducers: {
    setInvites: (state, action) => {
      state.invites = action.payload;
    },
    addInvite: (state, action) => {
      state.invites.push(action.payload);
    },
    removeInvite: (state, action) => {
      state.invites = state.invites.filter(invite => invite._id !== action.payload._id);
    }
  }
})

export default invitesSlice.reducer;
export const { setInvites, addInvite, removeInvite } = invitesSlice.actions;

export type RootStateInvites = {
  invites: InvitesState;
}