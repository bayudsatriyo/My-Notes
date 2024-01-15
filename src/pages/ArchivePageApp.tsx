import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchNote from "../components/SearchNote";
import { NoteArchive } from "../components/NotesList";
import { KeywordSearh } from "./HomePageApp";

function ArchivePage({ defaultNotes, onDelete, onArchive }: KeywordSearh) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("judul" || "");
  });

  function searchNote(search: string) {
    setKeyword(search);
    return setSearchParams({ judul: search });
  }
  console.log(keyword);
  return (
    <div>
      <SearchNote valueSearch={searchNote} />
      {(keyword == "" || keyword === null) && (
        <NoteArchive
          notes={defaultNotes}
          onDeleteHandler={onDelete}
          onArchiveHandler={onArchive}
        />
      )}
      {keyword !== "" && keyword !== null && (
        <NoteArchive
          notes={defaultNotes.filter(
            (note) =>
              note.title.toLowerCase().includes(keyword!) ||
              note.body.toLowerCase().includes(keyword!)
          )}
          onDeleteHandler={onDelete}
          onArchiveHandler={onArchive}
        />
      )}
    </div>
  );
}

export default ArchivePage;
