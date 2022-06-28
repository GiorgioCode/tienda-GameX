import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const games = [
  {
    id: 1,
    nombre: "Grand Theft Auto V",
    precio: 350,
    imagen:
      "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    stock: 28,
    categoria: 1,
    tiempo: 72,
  },
  {
    id: 2,
    nombre: "The Witcher 3: Wild Hunt",
    precio: 280,
    imagen:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    stock: 30,
    categoria: 1,
    tiempo: 47,
  },
  {
    id: 3,
    nombre: "Portal 2",
    precio: 240,
    imagen:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:338/q:75/https://bleedingcool.com/wp-content/uploads/2018/07/Portal-2-glance.jpg",
    stock: 37,
    categoria: 1,
    tiempo: 11,
  },
  {
    id: 4,
    nombre: "The Elder Scrolls V: Skyrim",
    precio: 300,
    imagen:
      "https://www.hardmaniacos.com/wp-content/uploads/2016/06/The-Elder-Scrolls-V-Skyrim-portada.jpg",
    stock: 20,
    categoria: 1,
    tiempo: 11,
  },
  {
    id: 5,
    nombre: "BioShock Infinite",
    precio: 400,
    imagen:
      "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    stock: 17,
    categoria: 1,
    tiempo: 12,
  },
  {
    id: 6,
    nombre: "Life is Strange",
    precio: 360,
    imagen:
      "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    stock: 37,
    categoria: 1,
    tiempo: 7,
  },
];

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
