import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootStateNotes, Note } from '../../redux/notesSlice';
import { setSelectedNote, removeNote } from '../../redux/notesSlice';
import '../../styling/Notes/NoteHeader.scss';

interface NoteHeaderProps {
  note: Note;
}

const NoteHeader: React.FC<NoteHeaderProps> = ({ note }) => {

  const dispatch = useDispatch();
  const isSelectedNote = useSelector((state: RootStateNotes) => state.notes.selectedNote?._id === note._id);

  const handleSetSelectedNote = () => {
    dispatch(setSelectedNote(note));
  }

  const handleRemoveNote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    fetch("http://localhost:8080/notes", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: note._id })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(removeNote(data.note));
      })
  }

  return (
    <div className={`note-header-container${isSelectedNote ? " selected" : ""}`} onClick={handleSetSelectedNote}>
      <button className="note-header-delete-button" onClick={(e) => handleRemoveNote(e)}>X</button>
      <p className="note-header-title">{note.title}</p>
    </div>
  )
}

export default NoteHeader;