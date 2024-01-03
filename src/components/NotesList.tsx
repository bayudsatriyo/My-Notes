import NoteItems, { noteitem } from "./NoteItems";
import ButtonNote from "./ButtonNote";

interface NotesList {
  notes: Array<noteitem>;
  onDeleteHandler: () => void;
  onArchiveHandler: () => void;
}

function NotesList({ notes, onDeleteHandler, onArchiveHandler }: NotesList) {
  return (
    <div className="notes__list px-5">
      <h2 className="text-xl py-5 font-bold">Catatan</h2>
      <div className="flex flex-row gap-12 flex-wrap">
        {notes.map((note) => (
          <div className="card-notes border-2 border-slate-100 px-2 rounded-xl">
            <NoteItems {...note} />
            <ButtonNote
              onDeleteHandler={onDeleteHandler}
              onArchiveHandler={onArchiveHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
