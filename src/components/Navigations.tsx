import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../context/context";

interface Logout {
  logout: () => void;
  name: string;
}

function Navigation({ logout, name }: Logout) {
  function hamburgerToggle() {
    const hamburger = document.getElementById("hamburger");
    const NavMenu = document.querySelector("#nav-menu");

    hamburger!.classList.toggle("hamburger-active");
    NavMenu!.classList.toggle("hidden");
  }

  return (
    <LocaleConsumer>
      {(context) => (
        <div className="px-4 fixed w-full md:w-1/6 md:px-0 flex md:inline border border-none md:border-b-slate-950 md:border-b-2 bg-white">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className="md:hidden"
            onClick={hamburgerToggle}
          >
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
          <div className="justify-end flex md:flex-col w-full">
            <h1 className="md:text-center font-bold pr-1 md:pt-2 pt-0 text-violet-500  text-xl md:text-2xl">
              Welcome
            </h1>
            <h1 className="md:text-center font-bold text-violet-500 text-xl md:text-2xl">
              {name}
            </h1>
          </div>

          <nav
            id="nav-menu"
            className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full top-full md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none"
          >
            <ul className="md:flex flex-col py-5 pl-2 gap-10 text-center text-slate-500">
              <li className="">
                <Link
                  to="/*"
                  className="font-semibold  border border-transparent  hover:border-b-violet-700 py-1 w-full block"
                >
                  {context.locale === "id" ? "Beranda" : "Home"}
                </Link>
              </li>
              <li className="">
                <Link
                  to="/archive"
                  className="font-semibold border border-transparent  hover:border-b-violet-700 py-1 w-full block"
                >
                  {context.locale === "id" ? "Arsip" : "Archive"}
                </Link>
              </li>

              <li className="py-1">
                <button
                  onClick={context.toggleLocale}
                  className="underline font-semibold"
                >
                  {context.locale === "id" ? "en" : "id"}
                </button>
              </li>
              <li className="font-semibold py-1">
                <button onClick={logout} className="pl-2 flex gap-2 mx-auto">
                  Logout
                  <FiLogOut />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </LocaleConsumer>
  );
}

export default Navigation;
