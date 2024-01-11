import React from "react";
import { BodyTitle } from "../utils/dataNotes";
import SearchNote from "../components/SearchNote";
import { NotesList } from "../components/NotesList";
import AddNote from "../components/CreateNote";
import { noteitem } from "../components/NoteItems";

export interface Keyword {
  defaultKeyword: string;
  onDelete: (id: number) => void;
  addNoteHandler: ({ title, body }: BodyTitle) => void;
  onArchive: (id: number) => void;
  defaultNotes: Array<noteitem>;
}

class HomePage extends React.Component<Keyword, { search: string }> {
  constructor(props: Keyword) {
    super(props);

    this.state = {
      search: props.defaultKeyword || "",
    };

    this.searchNote = this.searchNote.bind(this);
  }

  searchNote(search: string) {
    this.setState(() => {
      return { search: search };
    });
  }

  render() {
    return (
      <div>
        <AddNote addNote={this.props.addNoteHandler} />
        <SearchNote valueSearch={this.searchNote} />
        {this.state.search == "" && (
          <NotesList
            notes={this.props.defaultNotes}
            // archive={this.state.notes.filter(
            //   (archive) => archive.archived === true
            // )}
            onDeleteHandler={this.props.onDelete}
            onArchiveHandler={this.props.onArchive}
          />
        )}
        {this.state.search !== "" && (
          <NotesList
            notes={this.props.defaultNotes.filter(
              (note) =>
                note.title.toLowerCase().includes(this.state.search) ||
                note.body.toLowerCase().includes(this.state.search)
            )}
            // archive={this.state.notes.filter(
            //   (archive) =>
            //     archive.archived === true &&
            //     (archive.title.toLowerCase().includes(this.state.search) ||
            //       archive.body.toLowerCase().includes(this.state.search))
            // )}
            onDeleteHandler={this.props.onDelete}
            onArchiveHandler={this.props.onArchive}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
