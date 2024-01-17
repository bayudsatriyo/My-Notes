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
  console.log(id);
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

export { NoteItems };
