import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo1.png";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-5 shadow-md bg-[#ffffff]">
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="Logo" className="h-8" />
      </Link>
      <div className="flex items-center space-x-6 text-sm font-normal">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black"
              : "text-[#000000]  hover:text-[#000000]"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black"
              : "text-[#000000] hover:text-[#000000]"
          }
        >
          EVENTS
        </NavLink>
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black"
              : "text-[#000000] hover:text-[#000000]"
          }
        >
          FEED
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black"
              : "text-[#000000] hover:text-[#000000]"
          }
        >
          USER NAME
        </NavLink>
        <button className="bg-[#2C49FE]  hover:bg-blue-900 text-[#ffffff] px-4 py-1 rounded-full text-sm cursor-pointer font-bold">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Header;

