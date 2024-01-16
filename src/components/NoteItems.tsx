import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";

export interface noteitem {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
  owner?: string;
}

function NoteItems({ id, title, body, createdAt }: noteitem) {
  console.log(createdAt);
  console.log(typeof createdAt);
  const DateNew = new Date(createdAt);
  return (
    <div className="noteItem h-full text-slate-200">
      <Link to={`/note/${id}`}>
        <h2 className="font-bold text-xl py-4">{title}</h2>
      </Link>

      <p className="max-w-sm h-48 overflow-y-auto">{body}</p>
      <p>{showFormattedDate(DateNew)}</p>
    </div>
  );
}

function NoteDetail({ id, title, body, createdAt }: noteitem) {
  console.log(createdAt);
  console.log(typeof createdAt);
  const DateNew = new Date(createdAt);
  return (
    <div className="noteItem w-1/2 h-full text-slate-200 mt-10 mx-auto flex flex-col justify-center">
      <a href={`/note/${id}`} onClick={event?.preventDefault}>
        <h2 className="font-bold text-xl py-4">{title}</h2>
      </a>

      <p className=" h-48 overflow-y-auto">{body}</p>
      <p>{showFormattedDate(DateNew)}</p>
    </div>
  );
}

export { NoteItems, NoteDetail };
