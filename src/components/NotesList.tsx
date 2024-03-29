import { NoteItems } from "./NoteItems";
import { noteitem } from "./NoteItems";
import { ButtonArchive, ButtonNote } from "./ButtonNote";
import { LocaleConsumer } from "../context/context";

interface NotesList {
  notes: Array<noteitem>;
  onDeleteHandler: (id: number) => void;
  onArchiveHandler: (id: number) => void;
}

function NotesList({ notes, onDeleteHandler, onArchiveHandler }: NotesList) {
  console.log(notes);
  return (
    <LocaleConsumer>
      {(context) => (
        <div className="notes__list w-full block bg-violet-900 mt-20 rounded-t-large">
          <h2 className="text-3xl font-bold text-center text-slate-50 py-10">
            {context.locale === "id" ? "Catatan" : "Notes"}
          </h2>
          <div className="flex flex-row gap-2 flex-wrap justify-center px-4">
            {notes.length === 0 ? (
              <h1 className="text-white pb-4 mb-32">Notes Kosong</h1>
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
        </div>
      )}
    </LocaleConsumer>
  );
}

function NoteArchive({ notes, onDeleteHandler, onArchiveHandler }: NotesList) {
  return (
    <LocaleConsumer>
      {(context) => (
        <div className="notes__list w-full block bg-violet-900 mt-20 rounded-t-large">
          <h2 className="text-3xl font-bold text-center text-slate-50 py-10">
            {context.locale === "id" ? "Arsip" : "Archive"}
          </h2>
          <div className="flex flex-row gap-2 flex-wrap justify-center px-4">
            {notes.length === 0 ? (
              <h1 className="text-white pb-4 mb-32">Notes Kosong</h1>
            ) : (
              notes.map((note) => (
                <div className="card-notes border-2 shadow-lg shadow-violet-500/50 bg-violet-700 border-violet-600 px-2 rounded-xl max-w-96 min-w-80 flex flex-col h-85 mb-5">
                  <NoteItems {...note} />
                  <ButtonArchive
                    id={note.id}
                    onDeleteHandler={onDeleteHandler}
                    onBackHandler={onArchiveHandler}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </LocaleConsumer>
  );
}

export { NotesList, NoteArchive };
