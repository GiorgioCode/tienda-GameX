import React from "react";
import CartWidget from "./CartWidget";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import DropCategoria from "./DropCategoria";
import logo from "../GameX-Logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-900 shadow-xl shadow-red-500 fixed top-0 z-50">
        <div className="flex-1">
          <NavLink
            to={"/"}
            className="btn bg-slate-900 text-xl h-20 border-hidden hover:bg-slate-900"
          >
            <img className="h-20" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="gap-2">
          <DropCategoria />
          <CartWidget />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
