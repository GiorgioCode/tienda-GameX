import React from "react";
import CartWidget from "./CartWidget";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-900 shadow-xl shadow-red-500 fixed top-0 z-50">
        <div className="flex-1">
          <a
            href="# "
            className="btn bg-slate-900 text-xl h-20 border-hidden hover:bg-slate-900"
          >
            <img className="h-20" src="GameX-Logo.png" alt="logo" />
          </a>
        </div>
        <div className="gap-2">
          <Search />
          <CartWidget />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
