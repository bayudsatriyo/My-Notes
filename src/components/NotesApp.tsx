import React from "react";

import { noteitem } from "./NoteItems";
import {
  BodyTitle,
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/dataNotes";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navigation from "./Navigations";
import ArchiveWrapper from "../pages/ArchivePage";
import CreatePage from "../pages/AddPage";
import DetailWrapper from "../pages/DetailPage";

export interface Notes {
  notes: noteitem[];
  archives: noteitem[];
  search: string;
}

class MyNotes extends React.Component<object, Notes> {
  constructor(props: object) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      archives: getArchivedNotes(),
      search: "",
    };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
  }

  onDelete(id: number) {
    console.log(id);
    deleteNote(id);
    this.setState({ notes: getActiveNotes() });
    this.setState({ archives: getArchivedNotes() });
  }

  addNoteHandler({ title, body, archived }: BodyTitle) {
    addNote({ title, body, archived });
    console.log({ title, body, archived });
    this.setState({ notes: getActiveNotes() });
    this.setState({ archives: getArchivedNotes() });
  }

  onArchive(id: number) {
    archiveNote(id);
    this.setState({ notes: getActiveNotes() });
    this.setState({ archives: getArchivedNotes() });
  }

  onUnarchive(id: number) {
    console.log(id);
    unarchiveNote(id);
    this.setState({ notes: getActiveNotes() });
    this.setState({ archives: getArchivedNotes() });
  }

  render(): React.ReactNode {
    console.log("ini notes:");
    console.log(this.state.notes);
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
              path="/"
              element={
                <HomePage
                  defaultKeyword=""
                  onDelete={this.onDelete}
                  defaultNotes={this.state.notes}
                  addNoteHandler={this.addNoteHandler}
                  onArchive={this.onArchive}
                />
              }
            ></Route>
            <Route
              path="/archive"
              element={
                <ArchiveWrapper
                  defaultKeyword={this.state.search}
                  onDelete={this.onDelete}
                  defaultNotes={this.state.archives}
                  addNoteHandler={this.addNoteHandler}
                  onArchive={this.onUnarchive}
                />
              }
            ></Route>
            <Route path="/note/:id" element={<DetailWrapper />}></Route>
            <Route
              path="/add"
              element={<CreatePage addNote={this.addNoteHandler} />}
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

export default MyNotes;
