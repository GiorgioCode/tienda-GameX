import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { games } from "./listado";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(games);
      }, 2000); //segun consigna de filmina (2 segundos de espera)
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="d-flex inline-flex flex-wrap w-full justify-center">
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
