import React from "react";
import { Link } from "react-router-dom";

const Item = ({ games }) => {
  return (
    <div className="m-3 mx-1 bg-slate-900 rounded-xl shadow-md overflow-hidden max-w-2xl">
      <div className="flex">
        <div className="shrink-0">
          <img
            className="object-cover h-full w-48"
            src={games.imagen}
            alt="portada"
          />
        </div>
        <div className="p-8">
          <div className=" text-white text-2xl text-center mb-3 w-44 text-violet-600">
            {games.nombre}
          </div>
          <div className=" text-white mb-3"> Disponibles: {games.stock}</div>
          <div className=" text-white mb-3 text-2xl bg-black text-center py-2 text-violet-600 rounded-md">
            {" "}
            $ {games.precio}
          </div>

          <Link to={`/detalle/${games.id}`}>
            <button className="btn px-16 my-1 w-48 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
              {" "}
              Ver mas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
