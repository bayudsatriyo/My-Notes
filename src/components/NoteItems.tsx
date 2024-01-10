import { showFormattedDate } from "../utils";
export interface noteitem {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived?: boolean;
}

function NoteItems({ title, body, createdAt }: noteitem) {
  const DateNew = new Date(createdAt);
  return (
    <div className="noteItem h-full text-slate-200">
      <h2 className="font-bold text-xl py-4">{title}</h2>
      <p className="max-w-sm h-48 overflow-y-auto">{body}</p>
      <p>{showFormattedDate(DateNew)}</p>
    </div>
  );
}

export default NoteItems;
