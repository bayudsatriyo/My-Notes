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
import ArchivePage from "../pages/ArchivePage";
import Navigation from "./Navigations";

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

  addNoteHandler({ title, body }: BodyTitle) {
    addNote({ title, body });
    console.log({ title, body });
    this.setState({ notes: getActiveNotes() });
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
      <div>
        <Navigation />
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
              <ArchivePage
                defaultKeyword=""
                onDelete={this.onDelete}
                defaultNotes={this.state.archives}
                addNoteHandler={this.addNoteHandler}
                onArchive={this.onUnarchive}
              />
            }
          ></Route>
        </Routes>
        <footer className="bg-violet-400 text-center">
          <p>© 2024 MyNote-App || 🐱‍👤 Bayu Dwi Satriyo</p>
        </footer>
      </div>
    );
  }
}

export default MyNotes;
