import React from "react";
import { LocaleConsumer } from "../context/context";

interface SearchProps {
  valueSearch: (search: string) => void;
}

function SearchNote({ valueSearch }: SearchProps) {
  function onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    valueSearch(event.target.value.toLowerCase());
  }

  return (
    <LocaleConsumer>
      {(context) => (
        <div className="px-5 min-w-80">
          <form
            action=""
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              return null;
            }}
            className="flex flex-row justify-center mt-10 border border-violet-400 shadow-lg w-full md:w-1/2 shadow-violet-500/50 mx-auto rounded-md"
          >
            <img
              src="https://img.icons8.com/nolan/64/search.png"
              className="w-11 h-11 pt-3 pl-1"
            />
            <label
              htmlFor="searchbar"
              className="py-4 pr-4 grid-cols-5 md:grid-cols-6 lg:grid-cols-11 grid gap-5 lg:gap-8"
            >
              <span className="pr-2 text-violet-800">
                {context.locale === "id" ? "Cari" : "Search"}
              </span>
              <input
                type="text"
                className="rounded-md w-full pl-2 col-span-4 md:col-span-5 lg:col-span-10 text-slate-950 border border-violet-300 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                id="searchbar"
                onChange={onSearch}
              />
            </label>
          </form>
        </div>
      )}
    </LocaleConsumer>
  );
}

export default SearchNote;
