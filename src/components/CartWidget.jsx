import React from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label
          tabIndex="0"
          className="btn btn-ghost btn-circle text-3xl bg-slate-600 hover:bg-red-500 hover:text-black hover:shadow-lg hover:shadow-red-500"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item bg-red-600 text-black">
              1
            </span>
          </div>
        </label>
        <div className="mt-3 card card-compact dropdown-content w-52 bg-slate-600 shadow">
          <div className="card-body">
            <span className=" text-lg text-slate-900">
              1 - Call of Duty MW2
            </span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <NavLink to="/cart">
                <button className="btn bg-slate-900 btn-block hover:bg-red-500 hover:text-black hover:shadow-lg hover:shadow-red-500 hover:border-red-500">
                  Ver Carrito
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
