import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
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
          <ItemCount stock={8} initial={1} />
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
          <ItemCount stock={9} initial={1} />
        </div>
      </div>
      <div className="card m-4 bg-slate-900 shadow-xl inline-block">
        <figure>
          <img src="./metalGearSolid.png" alt="Imagen" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Metal Gear Solid 3D</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Disponibles: 6</div>
          </div>
          <ItemCount stock={6} initial={1} />
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
          <ItemCount stock={5} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
