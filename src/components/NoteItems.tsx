export interface noteitem {
  id?: number;
  title: string;
  body: string;
  createdAt: string;
  archived?: boolean;
}

function NoteItems({ title, body, createdAt }: noteitem) {
  return (
    <div className="noteItem">
      <h2 className="font-bold text-xl pb-4">{title}</h2>
      <p className="max-w-sm text-slate-400">{body}</p>
      <p>{createdAt}</p>
    </div>
  );
}

export default NoteItems;
