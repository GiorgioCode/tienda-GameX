import React from "react";

const ItemCart = ({ product }) => {
    return (
        <tr>
            <td className="text-center bg-slate-500 text-black text-lg">
                {product.cantidad}
            </td>
            <td className="text-center bg-slate-500 text-black text-lg">
                {product.nombre}
            </td>
            <td className="text-center bg-slate-500 text-black text-lg">
                $ {product.cantidad * product.precio}
            </td>
        </tr>
    );
};

export default ItemCart;
