import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-900 shadow-xl shadow-red-500 fixed">
        <div className="flex-1">
          <a className="btn bg-slate-900 text-xl h-20 border-hidden hover:bg-slate-900">
            <img className="h-20" src="GameX-Logo.png" />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered bg-slate-600 hover:bg-red-500 hover:text-black hover:shadow-lg hover:shadow-red-500"
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
                <a
                  className="hover:bg-red-500 hover:text-black hover:shadow-lg"
                  href="http://"
                >
                  Ver carrito
                </a>
              </li>
              <li>
                <a
                  className="justify-between hover:bg-red-500 hover:text-black hover:shadow-lg "
                  href="http://"
                >
                  Perfil
                  <span className="badge">Nuevo</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-red-500 hover:text-black hover:shadow-lg"
                  href="http://"
                >
                  Propiedades
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-red-500 hover:text-black hover:shadow-lg "
                  href="http://"
                >
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
