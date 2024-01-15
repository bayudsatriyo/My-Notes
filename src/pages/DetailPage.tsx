import React from "react";
import { NoteDetail, noteitem } from "../components/NoteItems";
import { getNote } from "../utils/dataNotes";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState<noteitem>();

  React.useEffect(() => {
    setNote(getNote(Number(id)));
  }, [id]);

  return (
    <section className="bg-violet-700 h-full pb-36">
      {note !== undefined ? <NoteDetail {...note} /> : <p>Kosong</p>}
    </section>
  );
}

export default DetailPage;
