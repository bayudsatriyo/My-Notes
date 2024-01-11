import React from "react";
import { BodyTitle } from "../utils/dataNotes";
// import ReactHtmlParser from "html-react-parser";

export interface NoteCreate {
  title: string;
  body: string;
  archived: boolean;
  lengthTitle: number;
  lengthBody: number;
}

export interface addNoteInter {
  addNote: (NoteCreate: BodyTitle) => void;
}

class AddNote extends React.Component<addNoteInter, NoteCreate> {
  constructor(props: addNoteInter) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
      lengthTitle: 20,
      lengthBody: 150,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onBodyHandler = this.onBodyHandler.bind(this);
    this.onCheckHandler = this.onCheckHandler.bind(this);
  }

  onCheckHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        archived: event.target.checked,
      };
    });
  }

  onTitleHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        title: event.target.value,
        lengthTitle: 20 - event.target.value.length,
      };
    });
  }

  onBodyHandler(event: React.FormEvent<HTMLDivElement>) {
    const value = event.currentTarget.innerHTML;
    this.setState(() => {
      return {
        body: value,
        lengthBody: 150 - value.length,
      };
    });
  }

  onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const titleBody: BodyTitle = {
      title: this.state.title,
      body: this.state.body,
      archived: this.state.archived,
    };
    this.props.addNote(titleBody);
    this.setState({
      title: "",
      body: "",
      archived: false,
      lengthTitle: 20,
      lengthBody: 150,
    });
    const body = document.getElementById("body")!;
    body.innerHTML = "";
  }

  render() {
    return (
      <div className="flex justify-center pt-10 mb-20">
        <form
          className="flex flex-col w-1/3 min-w-80 gap-3 p-10 border border-violet-300 shadow-lg shadow-violet-700/50 rounded-md"
          onSubmit={this.onSubmitHandler}
        >
          <label htmlFor="title" className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Title
              </span>
              <span className="text-sm text-slate-600">
                Sisa Karakter {this.state.lengthTitle}
              </span>
            </div>

            <input
              type="text"
              id="title"
              className="w-full text-slate-950 border placeholder:text-slate-400 border-violet-300 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500
              pl-2"
              placeholder="isikan Judul"
              value={this.state.title}
              onChange={this.onTitleHandler}
              maxLength={20}
            />
          </label>
          <div className="flex flex-row justify-between">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
              Isi Catatan
            </span>
            <span className="text-sm text-slate-600">
              Sisa Karakter {this.state.lengthBody}
            </span>
          </div>

          <div
            id="body"
            className="w-full px-2 text-slate-950"
            data-placeholder="Sebenarnya saya adalah ...."
            contentEditable
            onInput={this.onBodyHandler}
          />
          <label htmlFor="archived" className="">
            <input
              type="checkbox"
              name="archived"
              id="archived"
              onChange={this.onCheckHandler}
            />
            <span className="pl-2 text-violet-700 font-medium">Archived</span>
          </label>
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
}

export default AddNote;
