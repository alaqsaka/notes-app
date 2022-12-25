import React, { Component } from "react";
import { getInitialData } from "../utils";
import NoteAppHeader from "./NoteAppHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import TextField from "./TextField";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Archived from "../pages/Archived";

function NoteApp() {
  return (
    <div className="note-app">
      <header>
        <NoteAppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<Archived />} />
        </Routes>
      </main>
    </div>
  );
}

// export default class NoteApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getInitialData(),
//       archivedNotes: [],
//       search: "",
//       filteredNotes: [],
//     };

//     this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
//     this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
//     this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
//   }

//   onDeleteNoteHandler(id) {
//     const notes = this.state.notes.filter((note) => note.id !== id);
//     this.setState({ notes });
//   }

//   onArchiveNoteHandler(id) {
//     const note = this.state.notes.find((note) => note.id === id);
//     const newNote = note;
//     const notes = this.state.notes.filter((note) => note.id !== id);
//     newNote["archived"] = !newNote.archived;
//     notes.push(newNote);
//     this.setState({ notes });
//   }

//   onAddNoteHandler({ title, body }) {
//     console.log(title, body);
//     console.log({
//       id: +new Date(),
//       title,
//       body,
//       archived: false,
//       createdAt: new Date(),
//     });
//     this.setState((prevState) => {
//       return {
//         notes: [
//           ...prevState.notes,
//           {
//             id: +new Date(),
//             title,
//             body,
//             archived: false,
//             createdAt: new Date(),
//           },
//         ],
//       };
//     });
//   }

//   render() {
//     return (
//       <div className="note-app">

//         <div className="note-app__body">
//           <NoteInput addNote={this.onAddNoteHandler} />
//           <h2>Catatan Aktif</h2>

//           {this.state.notes.filter((note) => note.archived === false).length >
//           0 ? (
//             <NoteList
//               notes={
//                 this.state.search.length > 0
//                   ? this.state.filteredNotes
//                   : this.state.notes.filter((note) => note.archived === false)
//               }
//               onDelete={this.onDeleteNoteHandler}
//               onArchive={this.onArchiveNoteHandler}
//             />
//           ) : (
//             <p className="notes-list__empty-message">Catatan tidak tersedia</p>
//           )}
//           <h2>Catatan Arsip</h2>
//           {this.state.notes.filter((note) => note.archived === true).length >
//           0 ? (
//             <NoteList
//               notes={this.state.notes.filter((note) => note.archived === true)}
//               onDelete={this.onDeleteNoteHandler}
//               onArchive={this.onArchiveNoteHandler}
//             />
//           ) : (
//             <p className="notes-list__empty-message">Catatan tidak tersedia</p>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

export default NoteApp;
