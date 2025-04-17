import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import darkTheme from "../colors/theme";
import useAuthStore from "../store/useAuthStore";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthStore();
  return (
    <nav
      style={{
        backgroundColor: darkTheme.colors.NavbarBackground,
        borderColor: darkTheme.colors.border,
      }}
      className="py-4 lg:px-16  px-5 md:px-8 shadow-md border-b"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold flex  gap-4 items-center"
        >
          <img src={logo} width={30} /> <p>FutureTech</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-400">
          <li>
            <Link
              style={{
                backgroundColor: darkTheme.colors.NavbarSelectedTab,
                borderColor: darkTheme.colors.border,
              }}
              to="/"
              className=" border px-3 py-2 text-white rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-white">
              News
            </Link>
          </li>
          <li>
            <Link to="/podcasts" className="text-white">
              Podcasts
            </Link>
          </li>
          <li>
            <Link to="/resources" className="text-white">
              Resources
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          onClick={() => logout()}
          className="hidden md:block bg-yellow-500 text-black w-9 h-9 rounded-full font-semibold"
        >
          <img
            className="w-full h-full rounded-full"
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740"
            alt=""
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          style={{
            backgroundColor: darkTheme.colors.NavbarBackground,
            borderColor: darkTheme.colors.border,
          }}
          className="md:hidden text-white space-y-2 p-4 border-t"
        >
          <li>
            <Link
              to="/"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/podcasts"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Podcasts
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 bg-yellow-500 text-black text-center rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
