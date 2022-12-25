import React from "react";
// import { getInitialData } from "../utils";
// import NoteInput from "./NoteInput";
// import NoteList from "./NoteList";
// import TextField from "./TextField
import { Routes, Route } from "react-router-dom";

import NoteAppHeader from "./components/NoteAppHeader";
import Archived from "./pages/Archived";
import CatatanForm from "./pages/CatatanForm";
import DetailPage from "./pages/DetailPage";
import Homepage from "./pages/Homepage";

function NoteApp() {
  return (
    <>
      <div className="app-container ">
        <NoteAppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="/archived" element={<Archived />} />
            <Route path="/tambah-catatan" element={<CatatanForm />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default NoteApp;
