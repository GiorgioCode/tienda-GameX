import React from "react";
import { NavLink } from "react-router-dom";
import filtro from "./filter.svg";

const DropCategoria = () => {
    return (
        <div class="dropdown dropdown-end">
            <label
                for="my-modal-3"
                className="btn btn-ghost modal-button btn-circle avatar text-white bg-slate-600 hover:bg-red-500 hover:text-black hover:shadow-lg hover:shadow-red-500"
            >
                <div className="w-9 rounded-full indicator ">
                    <img src={filtro} alt="avatar" />
                </div>
            </label>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h2>Filtrar por Categoria:</h2>
                    <ul className="mt-3 p-2 text-black shadow w-full ">
                        <NavLink to={"/categoria/mundo_abierto"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                Mundo Abierto
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/fps"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                FPS (First Person Shooter)
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/aventura"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                Aventura
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/battle_royale"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                Battle Royale
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/carreras"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                Carreras
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/rpg"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                RPG
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/plataforma"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                Plataforma
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/deportes"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                Deportes
                            </li>
                        </NavLink>
                        <NavLink to={"/categoria/simulacion"}>
                            <li className="justify-between rounded-box p-2 text-center text-lg text-white hover:bg-red-500 hover:text-black hover:shadow-lg">
                                Simulacion
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropCategoria;
