import React from "react";
import FilaTabla from "./FilaTabla";

const TablaCarrito = ({ productos }) => {
    const totalProductos = () =>
        productos.reduce((acumulador, juego) => acumulador + juego.cantidad, 0);

    const totalPrecio = () => {
        return productos.reduce(
            (acumulador, act) => acumulador + act.cantidad * act.precio,
            0
        );
    };

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th className="text-center">Cantidad</th>
                        <th className="text-center">Descripcion</th>
                        <th className="text-center">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((product) => (
                        <FilaTabla key={product.id} product={product} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th className="text-orange-600 text-2xl  text-center">
                            {totalProductos()}
                        </th>
                        <th></th>
                        <th className="text-green-600 text-2xl text-center">
                            $ {totalPrecio()}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TablaCarrito;
