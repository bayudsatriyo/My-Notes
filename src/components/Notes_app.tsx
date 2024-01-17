import React from "react";
import { noteitem } from "./NoteItems";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigations";
import HomePage from "../pages/HomePageApp";
import ArchivePage from "../pages/ArchivePageApp";
import DetailPage from "../pages/DetailPage";
import AddNote, { BodyTitle } from "./AddNote";
import {
  ArchiveNote,
  UnarchiveNote,
  addNote,
  deleteNote,
  getActiveNotes,
  getArchivesNotes,
  getUserLogged,
  putAccessToken,
} from "../utils/api";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { LocaleProvider } from "../context/context";

function Notes_app() {
  const [notes, setNotes] = React.useState<Array<noteitem>>([]);
  const [archive, setArchive] = React.useState<Array<noteitem>>([]);
  const [auth, setAuth] = React.useState<{
    name: string;
    email: string;
  } | null>(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState("id");

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  React.useEffect(() => {
    async function getUserLog() {
      const { data } = await getUserLogged();
      setAuth(data);
    }
    getUserLog();
    setInitializing(false);
  }, []);

  React.useEffect(() => {
    if (auth !== null) {
      getActiveNotes().then(({ data }) => {
        setNotes(data);
      });
      getArchivesNotes().then(({ data }) => {
        setArchive(data);
      });
    }
  }, [auth]);

  async function onLoginSuccess({ accessToken }: { accessToken: string }) {
    console.log(accessToken);
    putAccessToken({ accessToken });
    const { data } = await getUserLogged();

    setAuth(data);
  }

  function onLogout() {
    setAuth(null);
    putAccessToken({ accessToken: "" });
  }

  async function onDeleteActiveNote(id: number) {
    const { error } = await deleteNote(id);
    if (!error) {
      const { data: Note } = await getActiveNotes();
      setNotes(Note);
    }
  }

  async function onDeleteArchiveNote(id: number) {
    const { error } = await deleteNote(id);
    if (!error) {
      const { data: Archive } = await getArchivesNotes();
      setArchive(Archive);
    }
  }

  async function addNoteHandler({ title, body }: BodyTitle) {
    const { error } = await addNote({ title, body });
    if (!error) {
      const { data: Note } = await getActiveNotes();
      setNotes(Note);
    }
  }

  async function onArchive(id: number) {
    const { error } = await ArchiveNote(id);
    if (!error) {
      const { data: Note } = await getActiveNotes();
      setNotes(Note);
      const { data: Archive } = await getArchivesNotes();
      setArchive(Archive);
    }
  }

  async function onUnarchive(id: number) {
    const { error } = await UnarchiveNote(id);
    if (!error) {
      const { data: Note } = await getActiveNotes();
      setNotes(Note);
      const { data: Archive } = await getArchivesNotes();
      setArchive(Archive);
    }
  }

  if (initializing === true) {
    return null;
  }
  if (auth === null) {
    console.log(auth);
    return (
      <Routes>
        <Route
          path="/*"
          element={<LoginPage loginSuccess={onLoginSuccess} />}
        ></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    );
  }

  const value = {
    locale,
    toggleLocale,
  };

  return (
    <LocaleProvider value={value}>
      <section className="h-screen">
        <section className="flex gap-10 flex-col md:flex-row">
          <header className="w-full md:w-1/5">
            <Navigation logout={onLogout} name={auth.name} />
          </header>
          <main className="w-full">
            <h1 className="font-bold text-4xl text-center text-violet-700 px-2 mt-20">
              {locale === "id" ? "Catatanku" : "My Notes"}{" "}
              <span className="text-slate-950">Beta v.0.5</span>
            </h1>
            <h2 className="font-bold text-4xl text-center px-2">
              {locale === "id"
                ? "Aplikasi pencatatan yang"
                : "The note-taking app that"}
              <span className="text-violet-700">
                {locale === "id"
                  ? " sinkron dengan hidup Anda"
                  : " syncs with your life"}
              </span>
            </h2>
            <Routes>
              <Route path="/note/:id" element={<DetailPage />}></Route>
              <Route
                path="/*"
                element={
                  <HomePage
                    onDelete={onDeleteActiveNote}
                    defaultNotes={notes}
                    onArchive={onArchive}
                  />
                }
              ></Route>
              <Route
                path="/archive"
                element={
                  <ArchivePage
                    onDelete={onDeleteArchiveNote}
                    defaultNotes={archive}
                    onArchive={onUnarchive}
                  />
                }
              ></Route>
              <Route
                path="/add"
                element={<AddNote addNote={addNoteHandler} />}
              ></Route>
            </Routes>
          </main>
        </section>
        <section className="relative">
          <footer className="bg-violet-400 text-center bottom-0 ">
            <p>© 2024 MyNote-App || 🐱‍👤 Bayu Dwi Satriyo</p>
          </footer>
        </section>
      </section>
    </LocaleProvider>
  );
}

export default Notes_app;
