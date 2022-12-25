import React, { Component } from "react";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";
import { getInitialData } from "../utils";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
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
    return (
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        {this.state.notes.filter((note) => note.archived === false).length >
        0 ? (
          <NoteList
            notes={
              this.state.search.length > 0
                ? this.state.filteredNotes
                : this.state.notes.filter((note) => note.archived === false)
            }
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
