import { createSlice } from '@reduxjs/toolkit';

type Invite = {
  eventId: string;
  inviterId: string;
  inviteeId: string;
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
    }
  }
})

export default invitesSlice.reducer;
export const { setInvites, addInvite } = invitesSlice.actions;

export type RootStateInvites = {
  invites: InvitesState;
}