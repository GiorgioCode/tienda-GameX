import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import carritoVacio from "./carritoVacio.svg";

const Cart = () => {
    const { carrito, totalPrice, totalProducts } = useCartContext();

    if (carrito.length === 0) {
        return (
            <>
                <h2 className="mt-32 text-center text-3xl">
                    <div className="d-flex inline-flex flex-wrap w-full justify-center">
                        <img
                            className=""
                            src={carritoVacio}
                            alt="carrito vacio"
                        />
                    </div>
                    El carrito está vacio y triste...
                </h2>
                <div className="d-flex inline-flex flex-wrap w-full justify-center mt-2 mb-80">
                    <Link to={`/`}>
                        <button className="btn px-16 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                            {" "}
                            Ver Catalogo
                        </button>
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="mt-32 border-4 m-2 mx-8 sm:mx-32 rounded-lg p-3 bg-slate-900">
                <h2 className="text-2xl text-start underline-offset-4 ">
                    Resumen:
                </h2>
                <ul className="text-lg text-start">
                    <li>
                        Cantidad de items:
                        <span className="text-3xl text-orange-400">
                            {" "}
                            {totalProducts()}
                        </span>
                    </li>
                    <li>
                        Total de la compra:
                        <span className="text-3xl text-orange-400">
                            {" "}
                            $ {totalPrice()}
                        </span>
                    </li>
                </ul>
                <div className="d-flex text-center my-2">
                    <Link className="h-1/3" to={"/"}>
                        <button className="btn mx-1 btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                            {" "}
                            Seguir eligiendo
                        </button>
                    </Link>
                    <button className="btn mx-1 btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                        {" "}
                        Finalizar compra
                    </button>
                </div>
            </div>
            <div className="d-flex inline-flex flex-wrap w-full justify-center mb-32">
                {carrito.map((product) => (
                    <ItemCart key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Cart;
