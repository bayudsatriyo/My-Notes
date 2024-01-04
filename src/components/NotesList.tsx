import NoteItems, { noteitem } from "./NoteItems";
import { ButtonNote, ButtonArchive } from "./ButtonNote";

interface NotesList {
  notes: Array<noteitem>;
  archive: Array<noteitem>;
  onDeleteHandler: (id: number | undefined) => void;
  onArchiveHandler: (id: number | undefined) => void;
}

function NotesList({
  notes,
  archive,
  onDeleteHandler,
  onArchiveHandler,
}: NotesList) {
  return (
    <div className="notes__list w-full block bg-violet-900 mt-20 rounded-t-large">
      <h2 className="text-3xl font-bold text-center text-slate-50 py-10">
        Catatan
      </h2>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {notes.map((note) => (
          <div className="card-notes border-2 shadow-lg shadow-violet-500/50 bg-violet-700 border-violet-600 px-2 rounded-xl w-96 min-w-60 flex flex-col h-85 mb-5">
            <NoteItems {...note} />
            <ButtonNote
              id={note.id}
              onDeleteHandler={onDeleteHandler}
              onArchiveHandler={onArchiveHandler}
            />
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center text-slate-50 py-10">
        Arsip
      </h2>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        {archive.map((arsip) => (
          <div className="card-notes border-2 bg-violet-700 border-violet-600 px-2 rounded-xl min-w-60 flex flex-col h-85 shadow-lg shadow-violet-500/50 mb-5">
            <NoteItems {...arsip} />
            <ButtonArchive
              id={arsip.id}
              onDeleteHandler={onDeleteHandler}
              onBackHandler={onArchiveHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
