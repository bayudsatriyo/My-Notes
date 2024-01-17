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
    <div className=" pt-10">
      <form
        className="flex flex-col w-full min-w-80 gap-3 p-10 "
        onSubmit={onSubmitHandler}
      >
        <label htmlFor="title" className="flex flex-col gap-3">
          <div className="flex flex-row justify-end">
            <span className="text-sm text-slate-600">
              Sisa Karakter {20 - title.length}
            </span>
          </div>

          <div
            id="title"
            className="w-full px-2 text-slate-950 md:text-2xl"
            data-placeholder="isikan Judul"
            contentEditable
            onInput={onTitleHandler}
          />
        </label>
        <div className="flex flex-row justify-end">
          <span className="text-sm text-slate-600">
            Sisa Karakter {150 - body.length}
          </span>
        </div>

        <div
          id="body"
          className="w-full h-40 px-2 text-slate-950 md:text-xl"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable
          onInput={onBodyHandler}
        />

        <br />
        <div className=" block w-full text-end">
          <button
            type="submit"
            className="bg-violet-700 text-slate-50 font-semibold w-14 text-2xl rounded-full py-2.5 border hover:bg-white hover:border-violet-700 hover:text-violet-700"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
