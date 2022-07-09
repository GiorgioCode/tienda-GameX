import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { carrito, totalPrice } = useCartContext();

    if (carrito.length === 0) {
        return (
            <>
                <h2 className="mt-32 text-center text-3xl">
                    ¡El carrito está vacio!
                </h2>
                <div className="d-flex inline-flex flex-wrap w-full justify-center mt-12 mb-80">
                    <Link to={`/`}>
                        <button className="btn px-16 my-1 w-48 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary">
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
            <h2 className="mt-32 text-center text-3xl">
                Precio total: $ {totalPrice()}
            </h2>
            <div className="d-flex inline-flex flex-wrap w-full justify-center mb-32">
                {carrito.map((product) => (
                    <ItemCart key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Cart;
