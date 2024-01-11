// import { noteitem } from "../components/NoteItems";
import React from "react";
import SearchNote from "../components/SearchNote";
import { NoteArchive } from "../components/NotesList";
import { Keyword } from "./HomePage";

class ArchivePage extends React.Component<Keyword, { search: string }> {
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
        <SearchNote valueSearch={this.searchNote} />
        {this.state.search == "" && (
          <NoteArchive
            notes={this.props.defaultNotes}
            // archive={this.state.notes.filter(
            //   (archive) => archive.archived === true
            // )}
            onDeleteHandler={this.props.onDelete}
            onArchiveHandler={this.props.onArchive}
          />
        )}
        {this.state.search !== "" && (
          <NoteArchive
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

export default ArchivePage;
