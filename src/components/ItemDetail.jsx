import React from "react";
import ReactPlayer from "react-player/youtube";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";

const ItemDetail = ({ data }) => {
  const onAdd = (qty) => {
    toast.success(`Agregaste ${qty} unidad/es de ${data.nombre} al carrito!`, {
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
    <>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <img
            className="bg-slate-900 m-1 rounded-md text-center"
            alt="imagen portada"
            src={data.imagen}
          />
          <span className="w-1/2">
            <div>Clasificación: {data.esrb} </div>
            <div>Duración: {data.tiempo} horas </div>
            <div>Categoría: {data.categoria} </div>
            <div>Creador: {data.creador} </div>
          </span>
          <div>
            <h1 class="text-5xl font-bold bg-slate-900 m-1 rounded-md text-center py-2">
              {data.nombre}
            </h1>
            <p className="px-6">{data.detalles}</p>
            <div className="text-center py-2 text-3xl bg-slate-900 m-1 rounded-md">
              Puntuacion:{" "}
              <progress
                class="progress progress-primary w-56"
                value={data.puntuacion}
                max="100"
              ></progress>
              {data.puntuacion} puntos
            </div>
            <div className="text-center py-2 text-3xl">
              Disponibles: {data.stock}
            </div>
            <div className="text-center py-2 text-5xl">
              Precio: $ {data.precio}
            </div>
            <div className="text-center py-2 text-3xl bg-slate-900 m-1 rounded-md">
              <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <ReactPlayer controls="true" url={data.video} />
      </div>
    </>
  );
};

export default ItemDetail;
