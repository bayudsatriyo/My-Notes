import React from "react";
import { BodyTitle } from "../utils/dataNotes";
import SearchNote from "../components/SearchNote";
import { NotesList } from "../components/NotesList";
import { noteitem } from "../components/NoteItems";
import { useSearchParams } from "react-router-dom";

export interface Keyword {
  defaultKeyword: string;
  onDelete: (id: number) => void;
  addNoteHandler: ({ title, body }: BodyTitle) => void;
  onArchive: (id: number) => void;
  defaultNotes: Array<noteitem>;
  keywordChange: (judul: string) => void;
}

export interface KeywordSearh {
  defaultKeyword: string;
  onDelete: (id: number) => void;
  addNoteHandler: ({ title, body }: BodyTitle) => void;
  onArchive: (id: number) => void;
  defaultNotes: Array<noteitem>;
}

function HomeWrapper({
  onDelete,
  addNoteHandler,
  onArchive,
  defaultNotes,
}: KeywordSearh) {
  const [searchParams, setSearchParams] = useSearchParams();

  const judul = searchParams.get("judul");

  function onSearchChange(judul: string) {
    setSearchParams({ judul });
  }

  return (
    <HomePage
      defaultKeyword={judul!}
      keywordChange={onSearchChange}
      onDelete={onDelete}
      addNoteHandler={addNoteHandler}
      onArchive={onArchive}
      defaultNotes={defaultNotes}
    />
  );
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

    this.props.keywordChange(search as string);
  }

  render() {
    return (
      <div>
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

export default HomeWrapper;
