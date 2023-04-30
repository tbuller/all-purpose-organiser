import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';

const NoteForm = () => {

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
      .then(data => console.log(data))
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  }

  return (
    <div className="note-form-container">
      <label className="note-form-label">Title:</label>
      <input className="note-form-input" type="text" onChange={handleTitleChange} />
      <label className="note-form-label">Content:</label>
      <input className="note-form-input" type="text" onChange={handleContentChange} />
      <button className="note-form-button" onClick={createNote}>Create note</button>
    </div>
  )
}

export default NoteForm;