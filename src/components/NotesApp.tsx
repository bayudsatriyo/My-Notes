import React from "react";
import { getInitialData } from "../utils/dataNotes";
import NotesList from "./NotesList";
import { noteitem } from "./NoteItems";
import AddNote, { NoteCreate } from "./CreateNote";
import SearchNote from "./SearchNote";

interface Notes {
  notes: noteitem[];
  search: string;
}

class MyNotes extends React.Component<object, Notes> {
  constructor(props: object) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  onDelete(id: number | undefined): void {
    const notes = this.state.notes.filter((note: noteitem) => note.id !== id);
    this.setState({ notes });
  }

  onArchive(id: number | undefined): void {
    const archivesIndex = this.state.notes.findIndex(
      (element) => element.id === id
    );
    this.setState((prevState) => {
      const newNotes = [...prevState.notes];
      newNotes[archivesIndex].archived = !newNotes[archivesIndex].archived;
      return {
        notes: [...newNotes],
      };
    });
  }

  addNoteHandler({ title, body, archived }: NoteCreate) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: prevState.notes.length - 1,
            title,
            body,
            createdAt: `${new Date()}`,
            archived,
          },
        ],
      };
    });
  }

  searchNote(search: string) {
    this.setState(() => {
      return { search: search };
    });
  }

  render(): React.ReactNode {
    console.log(this.state.search);
    return (
      <div>
        <h1 className="font-bold text-4xl text-center text-violet-700 px-2">
          My Notes <span className="text-slate-950">Beta v.0.5</span>
        </h1>
        <h2 className="font-bold text-4xl text-center px-2">
          The note-taking app that{" "}
          <span className="text-violet-700">syncs with your life</span>
        </h2>
        <AddNote addNote={this.addNoteHandler} />
        <SearchNote valueSearch={this.searchNote} />
        {this.state.search == "" && (
          <NotesList
            notes={this.state.notes.filter((note) => note.archived === false)}
            archive={this.state.notes.filter(
              (archive) => archive.archived === true
            )}
            onDeleteHandler={this.onDelete}
            onArchiveHandler={this.onArchive}
          />
        )}
        {this.state.search !== "" && (
          <NotesList
            notes={this.state.notes.filter(
              (note) =>
                note.archived === false &&
                (note.title.toLowerCase().includes(this.state.search) ||
                  note.body.toLowerCase().includes(this.state.search))
            )}
            archive={this.state.notes.filter(
              (archive) =>
                archive.archived === true &&
                (archive.title.toLowerCase().includes(this.state.search) ||
                  archive.body.toLowerCase().includes(this.state.search))
            )}
            onDeleteHandler={this.onDelete}
            onArchiveHandler={this.onArchive}
          />
        )}
        <footer className="bg-violet-400 text-center">
          <p>© 2024 MyNote-App || 🐱‍👤 Bayu Dwi Satriyo</p>
        </footer>
      </div>
    );
  }
}

export default MyNotes;
