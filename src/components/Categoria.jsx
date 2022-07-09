import React from "react";
import { Link } from "react-router-dom";

const Categoria = () => {
    return (
        <div className="d-flex inline-flex flex-wrap w-full justify-center mt-32">
            <Link to={"/"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/todas.jpeg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Todas</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/fps"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/fps.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">FPS</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/mundo_abierto"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/mundo_abierto.webp"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Mundo Abierto</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/aventura"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            className=""
                            src="../categorias/aventura.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Aventura</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/battle_royale"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/battle_royale.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Battle Royale</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/carreras"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/carreras.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Carreras</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/rpg"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/rpg.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">RPG</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/plataforma"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/plataforma.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Plataforma</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/deportes"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/deportes.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Deportes</h2>
                    </div>
                </div>
            </Link>
            <Link to={"/categoria/simulacion"}>
                <div class="card m-2 w-80 bg-base-100 shadow-2xl image-full hover:shadow-red-600 ">
                    <figure className="h-48">
                        <img
                            src="../categorias/simulacion.jpg"
                            alt="fondo_categoria"
                        />
                    </figure>
                    <div class="card-body text-center d-flex justify-center align-middle">
                        <h2 className="text-5xl text-white">Simulacion</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Categoria;
