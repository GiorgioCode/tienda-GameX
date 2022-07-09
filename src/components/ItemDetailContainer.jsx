import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { games } from "./listado";
import LoaderPacman from "./LoaderPacman";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(games);
                setCargando(false);
            }, 2000);
        });
        getData
            .then((res) =>
                setData(res.find((games) => games.id === parseInt(detalleId)))
            )
            .finally(() => setCargando(false));
    }, [detalleId]);

    return cargando ? (
        <div className="d-flex inline-flex flex-wrap w-full justify-center mt-80">
            <h1 className="text-center text-middle text-white text-3xl h-96">
                <LoaderPacman />
            </h1>
        </div>
    ) : (
        <div className="d-flex inline-flex flex-wrap w-full justify-center mt-32">
            <ItemDetail data={data} />
        </div>
    );
};
export default ItemDetailContainer;
