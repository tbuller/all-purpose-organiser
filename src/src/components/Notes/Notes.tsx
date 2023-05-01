import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateNotes } from '../../redux/notesSlice';
import { setNotes } from '../../redux/notesSlice';
import NoteForm from './NoteForm';
import '../../styling/Notes/Notes.scss';

const Notes = () => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const myNotes = useSelector((state: RootStateNotes) => state.notes.notes.filter(note => note.creatorId === loggedInUser?._id));

  const [openNoteForm, setOpenNoteForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/notes")
      .then(response => response.json())
      .then(data => {
        dispatch(setNotes(data.notes));
      })
  }, [])

  const handleNoteFormOpen = () => {
    setOpenNoteForm(!openNoteForm);
  }

  return (
    <div className="notes-page-container">
      <button onClick={handleNoteFormOpen}>{openNoteForm ? "Close note form" : "Open note form"}</button>
      <div className="note-form-wrapper">
      {openNoteForm && <NoteForm />}
      </div>
    </div>
  )
}

export default Notes;