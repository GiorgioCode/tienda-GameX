import React from "react";
import { Link } from "react-router-dom";

const Item = ({ games }) => {
    return (
        <Link className="h-1/3" to={`/detalle/${games.id}`}>
            <div className="m-2 hover:shadow-red-600 mx-1 w-48 hover:bg-red-900 bg-slate-900 rounded-xl shadow-xl overflow-hidden max-w-2xl">
                <div className="d-flex">
                    <div className="shrink-0">
                        <img
                            className="object-cover h-full w-48"
                            src={games.imagen}
                            alt="portada"
                        />
                    </div>
                    <div className="p-1 h-40">
                        <div className="text-2xl text-center mb-1 w-full  text-violet-600">
                            {games.nombre}
                        </div>
                        <div className=" text-white mb-3">
                            {" "}
                            Disponibles: {games.stock}
                        </div>
                        <div className="text-4xl text-center py-1 text-orange-600">
                            {" "}
                            $ {games.precio}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Item;
