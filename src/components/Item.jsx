import React from "react";

const Item = ({ games }) => {
  return (
    <div className="card w-56 m-4 bg-slate-900 shadow-xl inline-block">
      <figure>
        <img src={games.imagen} alt="Imagen" />
      </figure>
      <div className="card-body d-flex flex-col">
        <h2 className="card-title text-m h-14 text-center text-white">
          {games.nombre}
        </h2>
        <div className="card-actions justify-center">
          <button className="btn px-16 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
            {" "}
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
