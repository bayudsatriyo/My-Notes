interface handlerButton {
  onDeleteHandler: () => void;
  onArchiveHandler: () => void;
}

function ButtonNote({ onDeleteHandler, onArchiveHandler }: handlerButton) {
  return (
    <div className="flex flex-row gap-5 justify-center h-16 w-full py-3">
      <button
        onClick={onDeleteHandler}
        className="bg-indigo-500 w-1/2 rounded-md"
      >
        Delete
      </button>
      <button
        onClick={onArchiveHandler}
        className="bg-indigo-500 w-1/2 rounded-md"
      >
        Archive
      </button>
    </div>
  );
}

export default ButtonNote;
