import React from "react";

interface SearchState {
  search: string;
}

interface SearchProps {
  valueSearch: (search: string) => void;
}

class SearchNote extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueSearch(event.target.value);
  }

  render() {
    return (
      <div>
        <form
          action=""
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            return null;
          }}
          className="flex flex-row justify-center mt-10 border border-violet-400 shadow-lg shadow-violet-500/50 w-fit mx-auto rounded-md"
        >
          <img
            src="../../public/icons8-search.svg"
            className="w-11 h-11 pt-3"
          />
          <label htmlFor="searchbar" className="py-4 pr-4">
            <span className="pr-4 text-violet-800">Search</span>
            <input
              type="text"
              className="rounded-md w-80 text-slate-950 border border-violet-300 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              id="searchbar"
              onChange={this.onSearch}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchNote;
