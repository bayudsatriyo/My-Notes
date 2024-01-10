import NoteItems, { noteitem } from "./NoteItems";
import { ButtonNote } from "./ButtonNote";

interface NotesList {
  notes: Array<noteitem>;
  archive?: Array<noteitem>;
  onDeleteHandler: (id: number) => void;
  onArchiveHandler: (id: number) => void;
}

function NotesList({
  notes,
  // archive,
  onDeleteHandler,
  onArchiveHandler,
}: NotesList) {
  console.log(notes);
  return (
    <div className="notes__list w-full block bg-violet-900 mt-20 rounded-t-large">
      <h2 className="text-3xl font-bold text-center text-slate-50 py-10">
        Catatan
      </h2>
      <div className="flex flex-row gap-2 flex-wrap justify-center px-4">
        {notes.length === 0 ? (
          <h1 className="text-white pb-5">Notes Kosong</h1>
        ) : (
          notes.map((note) => (
            <div className="card-notes border-2 shadow-lg shadow-violet-500/50 bg-violet-700 border-violet-600 px-2 rounded-xl max-w-96 min-w-80 flex flex-col h-85 mb-5">
              <NoteItems {...note} />
              <ButtonNote
                id={note.id}
                onDeleteHandler={onDeleteHandler}
                onArchiveHandler={onArchiveHandler}
              />
            </div>
          ))
        )}
      </div>
      {/* <h2 className="text-3xl font-bold text-center text-slate-50 py-10">
        Arsip
      </h2>
      <div className="flex flex-row gap-2 flex-wrap justify-center px-4">
        {archive.length === 0 ? (
          <h1 className="text-white pb-5">Archive Kosong</h1>
        ) : (
          archive.map((arsip) => (
            <div className="card-notes border-2 bg-violet-700 border-violet-600 px-2 rounded-xl max-w-96 min-w-80 flex flex-col h-85 shadow-lg shadow-violet-500/50 mb-5">
              <NoteItems {...arsip} />
              <ButtonArchive
                id={arsip.id}
                onDeleteHandler={onDeleteHandler}
                onBackHandler={onArchiveHandler}
              />
            </div>
          ))
        )}
      </div> */}
    </div>
  );
}

export default NotesList;
