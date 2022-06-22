import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [cuenta, setCuenta] = useState(1);

  const handlerSuma = () => {
    if (cuenta < stock) {
      setCuenta(cuenta + 1);
    }
  };

  const handlerResta = () => {
    if (cuenta > initial) {
      setCuenta(cuenta - 1);
    }
  };
  return (
    <div className="m-0 ">
      <button
        onClick={handlerResta}
        className="btn w-12 btn-outline rounded-full circle hover:bg-red-600 bg-slate-900 text-white hover:text-black hover:shadow-lg hover:shadow-red-500"
      >
        {" "}
        -
      </button>
      <span className="p-1 text-white text-2xl">{cuenta}</span>
      <button
        onClick={handlerSuma}
        className="btn w-12 btn-outline rounded-full circle hover:bg-green-500 bg-slate-900 text-white hover:text-black hover:shadow-lg hover:shadow-green-500"
        disabled={cuenta === stock ? true : null}
      >
        {" "}
        +
      </button>
      <button className="btn mx-0.5 w-20 btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
        {" "}
        agregar
      </button>
    </div>
  );
};

export default ItemCount;
