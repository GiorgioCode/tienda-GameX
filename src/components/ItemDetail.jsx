import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [agregado, setAgregado] = useState(false);
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
    setAgregado(true);
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
            <div>Creador: {data.creador} </div>
          </span>
          <div className="w-full">
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
              {data.puntuacion}
            </div>
            <div className="text-center py-2 text-3xl">
              Disponibles: {data.stock}
            </div>
            <div className="text-center py-2 text-5xl">
              Precio: $ {data.precio}
            </div>
            <div className="text-center py-2 text-3xl bg-slate-900 m-1 rounded-md">
              {agregado ? (
                <Link to={"/cart"}>
                  <button className="btn mx-0.5 w-30 btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                    {" "}
                    Finalizar Compra{" "}
                  </button>
                </Link>
              ) : (
                <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 w-full d-flex inline-flex flex-wrap justify-center">
        <ReactPlayer controls="true" url={data.video} width="100%" />
      </div>
    </>
  );
};

export default ItemDetail;
