import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import TablaCarrito from "./TablaCarrito";
import ResumenCompra from "./ResumenCompra";

const Cart = () => {
    const { carrito } = useCartContext();

    if (carrito.length === 0) {
        return (
            <div className="h-screen">
                <div className="border-4 mt-32 rounded-lg p-3 bg-slate-900">
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
    }

    return (
        <>
            <div className="mt-32 border-4 m-2 mx-8 sm:mx-32 rounded-lg p-3 bg-slate-900">
                <ResumenCompra productos={carrito} />
                <div className="d-flex text-center my-2">
                    <Link className="h-1/3" to={"/"}>
                        <button className="btn mx-1 btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                            {" "}
                            Seguir eligiendo
                        </button>
                    </Link>
                    <Link className="h-1/3" to={"/checkout/"}>
                        <button className="btn mx-1 btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
                            {" "}
                            Finalizar compra
                        </button>
                    </Link>
                </div>
                <TablaCarrito productos={carrito} />
            </div>
            <div className="d-flex inline-flex flex-wrap w-full justify-center">
                {carrito.map((product) => (
                    <ItemCart key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Cart;
