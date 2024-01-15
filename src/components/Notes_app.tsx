import React from "react";
import { noteitem } from "./NoteItems";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/dataNotes";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigations";
import HomePage from "../pages/HomePageApp";
import ArchivePage from "../pages/ArchivePageApp";
import DetailPage from "../pages/DetailPage";
import AddNote, { BodyTitle } from "./AddNote";
import { putAccessToken } from "../utils/api";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function Notes_app() {
  const [notes, setNotes] = React.useState<Array<noteitem>>([]);
  const [archive, setArchive] = React.useState<Array<noteitem>>([]);
  const [auth, setAuth] = React.useState("");
  //   const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }, []);

  function onLoginSuccess({ accessToken }: { accessToken: string }) {
    console.log(accessToken);
    putAccessToken({ accessToken });
    setAuth(accessToken);
  }

  function onDelete(id: number) {
    deleteNote(id);
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }

  function addNoteHandler({ title, body }: BodyTitle) {
    addNote({ title, body });
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }

  function onArchive(id: number) {
    archiveNote(id);
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }

  function onUnarchive(id: number) {
    unarchiveNote(id);
    setNotes(getActiveNotes());
    setArchive(getArchivedNotes());
  }

  if (auth === "") {
    return (
      <Routes>
        <Route
          path="/*"
          element={<LoginPage loginSuccess={onLoginSuccess} />}
        ></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    );
  } else {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main>
          <h1 className="font-bold text-4xl text-center text-violet-700 px-2 mt-20">
            My Notes <span className="text-slate-950">Beta v.0.5</span>
          </h1>
          <h2 className="font-bold text-4xl text-center px-2">
            The note-taking app that{" "}
            <span className="text-violet-700">syncs with your life</span>
          </h2>
          <Routes>
            <Route
              path="/*"
              element={
                <HomePage
                  onDelete={onDelete}
                  defaultNotes={notes}
                  onArchive={onArchive}
                />
              }
            ></Route>
            <Route
              path="/archive"
              element={
                <ArchivePage
                  onDelete={onDelete}
                  defaultNotes={archive}
                  onArchive={onUnarchive}
                />
              }
            ></Route>
            <Route path="/note/:id" element={<DetailPage />}></Route>
            <Route
              path="/add"
              element={<AddNote addNote={addNoteHandler} />}
            ></Route>
          </Routes>
        </main>
        <footer className="bg-violet-400 text-center bottom-0">
          <p>© 2024 MyNote-App || 🐱‍👤 Bayu Dwi Satriyo</p>
        </footer>
      </>
    );
  }
}

export default Notes_app;
