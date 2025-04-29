import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Group.png";
import darkTheme from "../colors/theme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md  ${isActive ? "text-white border" : "text-gray-400"}`;

  const linkStyle = ({ isActive }) =>
    isActive
      ? {
          backgroundColor: darkTheme.colors.NavbarSelectedTab,
          borderColor: darkTheme.colors.border,
        }
      : {};

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "News",
      link: "/dashboard",
    },
    {
      title: "Podcasts",
      link: "podcasts",
    },
    {
      title: "Resources",
      link: "/resources",
    },
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <nav
      style={{
        backgroundColor: darkTheme.colors.NavbarBackground,
        borderColor: darkTheme.colors.border,
      }}
      className="py-4 lg:px-16 px-5 md:px-8 shadow-md border-b"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white text-2xl font-bold flex gap-4 items-center"
        >
          <img src={logo} width={30} alt="logo" /> <p>FutureTech</p>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item, index) => {
            return (
              <li>
                <NavLink
                  to={item.link}
                  className={linkClasses}
                  style={linkStyle}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          {
            token ? <li>
                <NavLink
                  to={'/dashboard'}
                  className={linkClasses}
                  style={linkStyle}
                >
                  Dashboard
                </NavLink>
              </li>
              : null
          }
        </ul>

        {/* Contact Button */}
        <Link
          to={"/profile"}
          className="hidden lg:block bg-yellow-500 text-black w-9 h-9 rounded-full font-semibold"
        >
          <img
            className="w-full h-full rounded-full"
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740"
            alt="User"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-400 text-2xl"
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
          className="lg:hidden absolute z-50 w-full  text-white space-y-2 p-4 left-0 mt-4 border-t"
        >
          <li>
            <NavLink
              to="/"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/podcasts"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Podcasts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block py-2 bg-yellow-500 text-black text-center rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
