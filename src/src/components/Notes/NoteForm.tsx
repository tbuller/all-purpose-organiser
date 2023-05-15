import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { addNote } from '../../redux/notesSlice';
import '../../styling/Notes/NoteForm.scss';

interface NoteFormProps {
  setOpenNoteForm: (value: boolean) => void;
}

const NoteForm = ({ setOpenNoteForm }: NoteFormProps) => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = () => {
    fetch("http://localhost:8080/notes", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ creatorId: loggedInUser?._id, title: title, content: content })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(addNote(data.note));
        setOpenNoteForm(false);
      })
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }

  return (
    <div className="note-form-container">
      <label className="note-form-label">Title:</label>
      <input className="note-form-input-title" type="text" onChange={handleTitleChange} />
      <label className="note-form-label">Content:</label>
      <textarea className="note-form-input-content" onChange={handleContentChange} />
      <button className="note-form-button" onClick={createNote}>Create note</button>
    </div>
  )
}

export default NoteForm;