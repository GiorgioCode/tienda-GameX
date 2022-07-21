import React from "react";
import { useCartContext } from "../context/CartContext";
import FilaTabla from "./FilaTabla";

const TablaCarrito = () => {
    const { carrito } = useCartContext();
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Descripcion</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((product) => (
                        <FilaTabla key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaCarrito;
