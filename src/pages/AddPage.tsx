import AddNote, { addNoteInter } from "../components/CreateNote";

function CreatePage({ addNote }: addNoteInter) {
  return (
    <>
      <AddNote addNote={addNote} />
    </>
  );
}

export default CreatePage;
