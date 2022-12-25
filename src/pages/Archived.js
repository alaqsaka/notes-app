import React, { Component } from "react";
import NoteList from "../components/NoteList";

import { getArchivedNotes } from "../utils/local-data";

export default class Archived extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      archivedNotes: [],
      search: "",
      filteredNotes: [],
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const note = this.state.notes.find((note) => note.id === id);
    const newNote = note;
    const notes = this.state.notes.filter((note) => note.id !== id);
    newNote["archived"] = !newNote.archived;
    notes.push(newNote);
    this.setState({ notes });
    console.log(this.state.notes);
  }

  onAddNoteHandler({ title, body }) {
    console.log(title, body);
    console.log({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date(),
    });
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  render() {
    console.log(this.state.notes);
    return (
      <div className="note-app__body">
        <h2>Catatan Diarsipkan</h2>
        {this.state.notes.length > 0 ? (
          <NoteList
            notes={this.state.notes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
        ) : (
          <p className="notes-list__empty-message">Catatan tidak tersedia</p>
        )}
      </div>
    );
  }
}
