import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          {...note}
          id={note.id}
          key={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
