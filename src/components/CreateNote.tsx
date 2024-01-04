import React from "react";

export interface NoteCreate {
  title: string;
  body: string;
  archived: boolean;
}

interface addNoteInter {
  addNote: (NoteCreate: NoteCreate) => void;
}

class AddNote extends React.Component<addNoteInter, NoteCreate> {
  constructor(props: addNoteInter) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
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
      };
    });
  }

  onBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
      archived: false,
    });
  }

  render() {
    return (
      <div className="flex justify-center pt-10">
        <form
          className="flex flex-col w-1/3 gap-3 p-10 border border-violet-300 shadow-lg shadow-violet-700/50 rounded-md"
          onSubmit={this.onSubmitHandler}
        >
          <label htmlFor="title" className="flex flex-col gap-3">
            <span>Title</span>
            <input
              type="text"
              id="title"
              className="w-full text-slate-950 border border-violet-300 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              placeholder=" isikan Judul"
              value={this.state.title}
              onChange={this.onTitleHandler}
            />
          </label>
          <label htmlFor="body" className="flex flex-col gap-3">
            <span>Isi Catatan</span>
            <textarea
              id="body"
              className="w-full text-slate-950 border  border-violet-300 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              placeholder=" isikan Catatan"
              value={this.state.body}
              onChange={this.onBodyHandler}
            />
          </label>
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
