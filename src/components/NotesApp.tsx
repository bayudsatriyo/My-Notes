import React from "react";

import { noteitem } from "./NoteItems";
import {
  BodyTitle,
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
} from "../utils/dataNotes";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export interface Notes {
  notes: noteitem[];
  search: string;
}

class MyNotes extends React.Component<object, Notes> {
  constructor(props: object) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      search: "",
    };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
  }

  onDelete(id: number) {
    console.log(id);
    deleteNote(id);
    this.setState({ notes: getActiveNotes() });
  }

  addNoteHandler({ title, body }: BodyTitle) {
    addNote({ title, body });
    this.setState({ notes: getActiveNotes() });
  }

  onArchive(id: number) {
    archiveNote(id);
    this.setState({ notes: getActiveNotes() });
  }

  render(): React.ReactNode {
    console.log("ini notes:");
    console.log(this.state.notes);
    return (
      <div>
        <h1 className="font-bold text-4xl text-center text-violet-700 px-2">
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
        </Routes>
        <footer className="bg-violet-400 text-center">
          <p>© 2024 MyNote-App || 🐱‍👤 Bayu Dwi Satriyo</p>
        </footer>
      </div>
    );
  }
}

export default MyNotes;
