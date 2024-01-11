import React from "react";
import { NoteDetail, noteitem } from "../components/NoteItems";
import { getNote } from "../utils/dataNotes";
import { useParams } from "react-router-dom";

interface DetailPageState {
  note: noteitem;
}

function DetailWrapper() {
  const { id } = useParams();

  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component<{ id: number }, DetailPageState> {
  constructor(props: { id: number }) {
    super(props);

    this.state = {
      note: getNote(props.id)!,
    };
  }

  render() {
    const noteItem = this.state.note;
    console.log(noteItem);
    return (
      <section className="bg-violet-700 h-full pb-36">
        {this.state.note !== null ? (
          <NoteDetail {...noteItem} />
        ) : (
          <p>Kosong</p>
        )}
      </section>
    );
  }
}

export default DetailWrapper;
