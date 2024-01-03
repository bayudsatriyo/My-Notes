import React from "react";
import { getInitialData } from "../utils/dataNotes";
import NotesList from "./NotesList";
import { noteitem } from "./NoteItems";

interface Notes {
  notes: noteitem[];
}

class MyNotes extends React.Component<object, Notes> {
  constructor(props: object) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  onDelete(): void {}

  onArchive(): void {}

  render(): React.ReactNode {
    return (
      <div>
        <h1 className="font-bold text-4xl text-center">Testing My Notes</h1>
        <NotesList
          notes={this.state.notes}
          onDeleteHandler={this.onDelete}
          onArchiveHandler={this.onArchive}
        />
      </div>
    );
  }
}

export default MyNotes;
