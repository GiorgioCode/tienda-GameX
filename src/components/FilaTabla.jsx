import React from "react";

const ItemCart = ({ product }) => {
    return (
        <tr>
            <td className="text-center">{product.cantidad}</td>
            <td className="text-center">{product.nombre}</td>
            <td className="text-center">
                $ {product.cantidad * product.precio}
            </td>
        </tr>
    );
};

export default ItemCart;
