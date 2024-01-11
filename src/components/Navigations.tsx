import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar w-full fixed top-0 z-[9999] border border-b-2 bg-white bg-opacity-60">
      <ul className="flex justify-end mx-32 py-5 px-5 gap-10">
        <li className="">
          <Link to="/" className="font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/archive" className="font-semibold">
            Archive
          </Link>
        </li>
        <li>
          <Link to="/add" className="font-semibold">
            Add Note
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
