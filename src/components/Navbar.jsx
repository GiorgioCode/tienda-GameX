import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-900">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl h-20">
            <img className="h-20" src="GameX-Logo.png" />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered bg-slate-600 hover:bg-emerald-900 hover:text-white"
            />
          </div>
          <div className="dropdown dropdown-end bg-slate-900">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt="avatar"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-700 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Perfil
                  <span className="badge">Nuevo</span>
                </a>
              </li>
              <li>
                <a>Propiedades</a>
              </li>
              <li>
                <a>Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-right bg-black text-orange-600">
        Hola Mundo
      </h1>
    </div>
  );
};

export default Navbar;
