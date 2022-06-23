import React from "react";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";

const ItemListContainer = ({ name }) => {
  const onAdd = (qty) => {
    toast.success(`Agregaste ${qty} unidad/es al carrito!!`, {
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
    <div className="d-flex inline-flex flex-wrap w-full justify-center">
      <div className="card m-4 bg-slate-900 shadow-xl inline-block">
        <figure>
          <img src="./FinalFantasyXIV.png" alt="Imagen" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Final Fantasy XIV</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Disponibles: 8</div>
          </div>
          <ItemCount stock={8} initial={1} onAdd={onAdd} />
        </div>
      </div>
      <div className="card m-4 bg-slate-900 shadow-xl inline-block">
        <figure>
          <img src="./GtaV.png" alt="Imagen" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Grand Theft Auto V</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Disponibles: 9</div>
          </div>
          <ItemCount stock={9} initial={1} onAdd={onAdd} />
        </div>
      </div>
      <div className="card m-4 bg-slate-900 shadow-xl inline-block">
        <figure>
          <img src="./metalGearSolid.png" alt="Imagen" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Metal Gear Solid 3D</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Disponibles: 0</div>
          </div>
          <ItemCount stock={0} initial={1} onAdd={onAdd} />
        </div>
      </div>
      <div className="card m-4 bg-slate-900 shadow-xl inline-block">
        <figure>
          <img src="./callofdutyMW2.png" alt="Imagen" />
        </figure>
        <div className="card-body my-0">
          <h2 className="card-title my-0">Call of Duty MW 2</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Disponibles: 5</div>
          </div>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
