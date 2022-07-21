import React from "react";

const ItemCart = ({ product }) => {
    return (
        <tr>
            <td>{product.cantidad}</td>
            <td>{product.nombre}</td>
            <td>$ {product.cantidad * product.precio}</td>
        </tr>
    );
};

export default ItemCart;
