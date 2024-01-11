interface handlerButton {
  id: number;
  onDeleteHandler: (id: number) => void;
  onArchiveHandler: (id: number) => void;
}

interface handlerArchiveButton {
  id: number;
  onDeleteHandler: (id: number) => void;
  onBackHandler: (id: number) => void;
}

function ButtonNote({ id, onDeleteHandler, onArchiveHandler }: handlerButton) {
  return (
    <div className="flex flex-row gap-2 justify-center h-16 w-full py-3">
      <button
        onClick={() => onDeleteHandler(id)}
        className="bg-slate-100 text-violet-800 border border-violet-500  font-semibold w-1/2 rounded-md hover:bg-violet-800 hover:text-white hover:border-violet-50"
      >
        Delete
      </button>
      <button
        onClick={() => onArchiveHandler(id)}
        className="bg-slate-100 text-violet-800 font-semibold border border-violet-500 w-1/2 rounded-md hover:bg-violet-800 hover:text-white hover:border-violet-50"
      >
        Archive
      </button>
    </div>
  );
}

function ButtonArchive({
  id,
  onDeleteHandler,
  onBackHandler,
}: handlerArchiveButton) {
  return (
    <div className="flex flex-row gap-2 justify-center h-16 w-full py-3">
      <button
        onClick={() => onDeleteHandler(id)}
        className="bg-slate-100 text-violet-800 font-semibold border border-violet-500 w-1/2 rounded-md hover:bg-violet-800 hover:text-white hover:border-violet-50"
      >
        Delete
      </button>
      <button
        onClick={() => onBackHandler(id)}
        className="bg-slate-100 text-violet-800 font-semibold border border-violet-500 w-1/2 rounded-md hover:bg-violet-800 hover:text-white hover:border-violet-50"
      >
        Back
      </button>
    </div>
  );
}

export { ButtonNote, ButtonArchive };
