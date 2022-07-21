import React from "react";
import warning from "./warning.svg";
import { Link } from "react-router-dom";

const PaginaNoEncontrada = () => {
    return (
        <div>
            <div className="mt-32 d-flex inline-flex flex-wrap w-full justify-center">
                <img className="" src={warning} alt="carrito vacio" />
            </div>
            <h2 className="text-center text-3xl">
                Disculpa, la pagina que buscas no se encuentra disponible
            </h2>
            <div className="d-flex inline-flex flex-wrap w-full justify-center mt-2 m-5">
                <Link to={`/`}>
                    <button className="btn px-16 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                        {" "}
                        Ir al inicio
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PaginaNoEncontrada;
