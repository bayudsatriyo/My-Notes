import React from "react";
import { noteitem } from "../components/NoteItems";

import { useParams } from "react-router-dom";
import { getNoteById } from "../utils/api";
import { showFormattedDate } from "../utils";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState<noteitem>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log(id);
    setLoading(true);
    async function getnotebyid() {
      await getNoteById(id as string).then(({ data }) => {
        setNote(data);
        setLoading(false);
      });
    }
    getnotebyid();
  }, [id]);

  return (
    <section className="bg-violet-700 pb-20 mt-10 rounded-t-large">
      {loading ? (
        <div className="noteItem  bg-violet-700 rounded-t-large mt-10 mx-auto flex flex-col pt-32">
          <p className="font-bold text-2xl mx-auto text-slate-50">
            Loading ...
          </p>
        </div>
      ) : note !== undefined ? (
        <div className="noteItem  text-slate-200 mx-10 md:mx-36 pt-10 flex flex-col">
          <h2 className="font-bold py-4 text-3xl">{note.title}</h2>

          <p className=" h-48 overflow-y-auto text-xl">{note.body}</p>
          <p>{showFormattedDate(new Date(note.createdAt))}</p>
        </div>
      ) : (
        <p className="font-bold text-2xl mx-auto text-slate-50">Kosong</p>
      )}
    </section>
  );
}

export default DetailPage;
