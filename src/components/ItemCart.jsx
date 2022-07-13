import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
    const { removeItem, plusProduct, sustProduct } = useCartContext();
    return (
        <div className="m-2 hover:shadow-red-600 w-96 mx-1 h-1/3 bg-slate-900 rounded-xl shadow-xl overflow-hidden max-w-2xl">
            <div className="flex">
                <div className="shrink-0 w-48">
                    <img
                        className="object-cover h-full"
                        src={product.imagen}
                        alt="portada"
                    />
                </div>
                <div className="p-8">
                    <div className="text-2xl text-center mb-1 w-full  text-violet-600">
                        {product.nombre}
                    </div>
                    <div className=" text-white mb-3">
                        {" "}
                        Stock: {product.stock}
                    </div>
                    <div className=" text-white mb-3">
                        {" "}
                        Cantidad: {product.cantidad}
                    </div>
                    <div className=" text-white mb-3">
                        {" "}
                        Precio: $ {product.precio}
                    </div>
                    <div className="text-4xl text-left py-1 text-orange-600">
                        <span>${product.cantidad * product.precio}</span>
                    </div>
                    <button
                        onClick={() => removeItem(product.id, product.stock)}
                        className="btn px-16 my-1 w-3 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary"
                    >
                        {" "}
                        Eliminar
                    </button>
                    <div>
                        <button
                            disabled={product.cantidad <= 1}
                            onClick={() => sustProduct(product.id)}
                            className="btn my-1 px-6 w-3 mx-2  text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary"
                        >
                            {" "}
                            -
                        </button>

                        <button
                            disabled={product.stock <= product.cantidad}
                            onClick={() =>
                                plusProduct(product.id, product.stock)
                            }
                            className="btn my-1 px-6 w-3 text-center btn-outline rounded-full circle hover:bg-primary bg-slate-900 text-white hover:text-white hover:shadow-lg hover:shadow-primary"
                        >
                            {" "}
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCart;
