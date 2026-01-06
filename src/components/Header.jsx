import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const contents = ["Home", "About", "Experience", "Projects"];
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-rose-900 to-rose-700 text-white">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo / Title (optional but recommended) */}
        <Link to="/" className="text-lg font-semibold">
          Rafaela
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {contents.map((c) => (
            <li key={c} className="list-none px-6">
              <Link
                to={c === "Home" ? "/" : `/${c.toLowerCase()}`}
                className="hover:text-rose-300 transition"
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-rose-800 px-4 pb-4">
          {contents.map((c) => (
            <li key={c} className="list-none py-2">
              <Link
                to={c === "Home" ? "/" : `/${c.toLowerCase()}`}
                className="block w-full hover:text-rose-300 transition"
                onClick={() => setOpen(false)}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
