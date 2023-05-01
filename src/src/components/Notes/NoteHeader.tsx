import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../../redux/notesSlice';
import { setSelectedNote } from '../../redux/notesSlice';
import '../../styling/Notes/NoteHeader.scss';

interface NoteHeaderProps {
  note: Note;
}

const NoteHeader: React.FC<NoteHeaderProps> = ({ note }) => {

  const dispatch = useDispatch();

  const handleSetSelectedNote = () => {
    dispatch(setSelectedNote(note));
  }

  return (
    <div className="note-header-container" onClick={handleSetSelectedNote}>
      <p className="note-header-title">{note.title}</p>
    </div>
  )
}

export default NoteHeader;