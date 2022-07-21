import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import pago from "./payment.svg";
import carritoVacio from "./empty_cart.svg";
import TablaCarrito from "./TablaCarrito";

const Checkout = () => {
    const { carrito, totalPrice, totalProducts } = useCartContext();

    if (carrito.length === 0) {
        return (
            <div>
                <img
                    className="center mt-32 d-flex justify-center w-96"
                    src={carritoVacio}
                    alt="carrito vacio"
                />
                <div className="border-4 rounded-lg p-3 bg-slate-900">
                    <h2 className="text-2xl text-start underline-offset-4 ">
                        El carrito se encuentra vacio, por favor visita nuestro
                        catalogo para elegir un producto.
                    </h2>
                    <div className="d-flex text-center my-2">
                        <Link className="h-1/3" to={"/"}>
                            <button className="btn mx-1 btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                                {" "}
                                Seguir eligiendo
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <img
                    className="center mt-32 d-flex justify-center w-96"
                    src={pago}
                    alt="carrito vacio"
                />
                <div className="border-4 rounded-lg p-3 bg-slate-900">
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
                    </div>
                    <TablaCarrito />
                </div>
            </div>
        );
    }
};

export default Checkout;
