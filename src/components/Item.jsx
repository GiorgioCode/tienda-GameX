import React from "react";
import { Link } from "react-router-dom";

const Item = ({ games }) => {
    return (
        <div className="m-2 hover:shadow-red-600  mx-1 bg-slate-900 rounded-xl shadow-xl overflow-hidden max-w-2xl">
            <div className="flex">
                <div className="shrink-0">
                    <img
                        className="object-cover h-full w-48"
                        src={games.imagen}
                        alt="portada"
                    />
                </div>
                <div className="p-8">
                    <div className="text-2xl text-center mt-0 mb-1 w-48 text-violet-600">
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

                    <Link to={`/detalle/${games.id}`}>
                        <button className="btn px-16 my-1 w-48 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                            {" "}
                            Ver mas
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
