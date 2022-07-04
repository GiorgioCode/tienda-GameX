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
    <div className="m-3 max-w-md mx-1 bg-slate-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="w-96 h-96 object-cover md:h-full md:w-48"
            src={games.imagen}
            alt="portada"
          />
        </div>
        <div className="p-8">
          <div className=" text-white text-2xl text-center mb-3">
            {games.nombre}
          </div>
          <div className=" text-white mb-3"> Disponibles: {games.stock}</div>
          <div className=" text-white mb-3 text-2xl">
            {" "}
            Precio: $ {games.precio}
          </div>

          <div>
            <ItemCount stock={games.stock} initial={1} onAdd={onAdd} />
          </div>
          <button className="btn px-16 my-6 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
            {" "}
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
