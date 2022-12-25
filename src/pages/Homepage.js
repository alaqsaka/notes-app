import React, { Component } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import NoteList from "../components/NoteList";

import { getActiveNotes } from "../utils/local-data";
import SearchBar from "../components/SearchBar";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    console.log(notes);

    return (
      <div className="note-app__body">
        <Link
          className="btn-link button__base"
          to={"/tambah-catatan"}
          style={{
            width: "200px",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          <AiOutlinePlus /> Tambah Catatan
        </Link>
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {notes.length > 0 ? (
          <NoteList
            notes={notes}
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

export default HomePageWrapper;
