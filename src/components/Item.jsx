import React from "react";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";

const Item = ({ games }) => {
  const onAdd = (qty) => {
    toast.success(`Agregaste ${qty} unidad/es de ${games.nombre} al carrito!`, {
      theme: "dark",
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="card w-80 m-4 bg-slate-900 shadow-xl inline-block">
      <figure>
        <img src={games.imagen} alt="Imagen" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{games.nombre}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Disponibles: {games.stock}</div>
        </div>
        <ItemCount stock={games.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
