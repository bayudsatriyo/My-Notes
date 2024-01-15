import React from "react";

interface SearchProps {
  valueSearch: (search: string) => void;
}

function SearchNote({ valueSearch }: SearchProps) {
  function onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    valueSearch(event.target.value.toLowerCase());
  }

  return (
    <div className="px-5 min-w-80">
      <form
        action=""
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          return null;
        }}
        className="flex flex-row justify-center mt-10 border border-violet-400 shadow-lg shadow-violet-500/50 w-fit mx-auto rounded-md"
      >
        <img
          src="https://img.icons8.com/nolan/64/search.png"
          className="w-11 h-11 pt-3 pl-1"
        />
        <label htmlFor="searchbar" className="py-4 pr-4 grid-cols-5 grid gap-5">
          <span className="pr-4 text-violet-800">Search</span>
          <input
            type="text"
            className="rounded-md px-2 w-full col-span-4 text-slate-950 border border-violet-300 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            id="searchbar"
            onChange={onSearch}
          />
        </label>
      </form>
    </div>
  );
}

export default SearchNote;
