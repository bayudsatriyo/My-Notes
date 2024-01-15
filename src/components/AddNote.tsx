import React from "react";

export interface BodyTitle {
  title: string;
  body: string;
}

export interface addNoteInter {
  addNote: (NoteCreate: BodyTitle) => void;
}

function useInput(
  defaultValue: string,
  jumChar: number
): [string, (event: React.FormEvent<HTMLDivElement>) => void] {
  const [value, setValue] = React.useState(defaultValue);
  const onHandler = (event: React.FormEvent<HTMLDivElement>) => {
    const valueTemp = event.currentTarget.innerHTML;
    if (valueTemp.length > jumChar) {
      event.currentTarget.innerHTML = value;
    } else {
      setValue(valueTemp);
    }
  };

  return [value, onHandler];
}
function AddNote({ addNote }: addNoteInter) {
  const [title, onTitleHandler] = useInput("", 20);
  const [body, onBodyHandler] = useInput("", 150);

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const titleBody = {
      title: title as string,
      body: body as string,
    };

    addNote(titleBody);
    const bodyElement = document.getElementById("body")!;
    bodyElement.innerHTML = "";
    document.getElementById("title")!.innerHTML = "";
  }

  return (
    <div className="flex justify-center pt-10 mb-28">
      <form
        className="flex flex-col w-1/3 min-w-80 gap-3 p-10 border border-violet-300 shadow-lg shadow-violet-700/50 rounded-md"
        onSubmit={onSubmitHandler}
      >
        <label htmlFor="title" className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
              Title
            </span>
            <span className="text-sm text-slate-600">
              Sisa Karakter {20 - title.length}
            </span>
          </div>

          <div
            id="title"
            className="w-full px-2 text-slate-950"
            data-placeholder="isikan Judul"
            contentEditable
            onInput={onTitleHandler}
          />
        </label>
        <div className="flex flex-row justify-between">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Isi Catatan
          </span>
          <span className="text-sm text-slate-600">
            Sisa Karakter {150 - body.length}
          </span>
        </div>

        <div
          id="body"
          className="w-full px-2 text-slate-950"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable
          onInput={onBodyHandler}
        />

        <br />
        <button
          type="submit"
          className="bg-violet-700 text-slate-50 font-semibold w-36 min-w-20 mx-auto block rounded-xl py-2 border hover:bg-white hover:border-violet-700 hover:text-violet-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
