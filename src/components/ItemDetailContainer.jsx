import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { games } from "./listado";
import LoaderPacman from "./LoaderPacman";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        setCargando(false);
        resolve(games);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);
  return cargando ? (
    <div className="d-flex inline-flex flex-wrap w-full justify-center mt-80">
      <h1 className="text-center text-middle text-white text-3xl h-96">
        <LoaderPacman />
      </h1>
    </div>
  ) : (
    <div className="d-flex inline-flex flex-wrap w-full justify-center mt-32">
      <ItemDetail data={data[0]} />
    </div>
  );
};
export default ItemDetailContainer;
