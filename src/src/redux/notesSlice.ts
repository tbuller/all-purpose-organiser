import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type Note = {
  creatorId: string;
  title: string;
  content: string;
  createdAt: Date;
  _id: string;
}

type NotesState = {
  notes: Note[];
}

const initialState: NotesState = {
  notes: []
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(note => note._id !== action.payload._id);
    }
  }
})

export default notesSlice.reducer;
export const { setNotes, addNote, removeNote } = notesSlice.actions;

