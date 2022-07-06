import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { games } from "./listado";
import LoaderPacman from "./LoaderPacman";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        setCargando(false);
        resolve(games);
      }, 2000); //segun consigna de filmina (2 segundos de espera)
    });

    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((games) => games.categoria === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return cargando ? (
    <div className="d-flex inline-flex flex-wrap w-full justify-center mt-80">
      <h1 className="text-center text-middle text-white text-3xl h-96">
        <LoaderPacman />
      </h1>
    </div>
  ) : (
    <div className="d-flex inline-flex flex-wrap w-full justify-center mt-32">
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
