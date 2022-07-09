import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const clear = () => setCarrito([]);

    const isInCart = (id) =>
        carrito.find((juego) => juego.id === id) ? true : false;

    const removeItem = (id) =>
        setCarrito(carrito.filter((juego) => juego.id !== id));

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCarrito(
                carrito.map((juego) => {
                    return juego.id === item.id
                        ? { ...juego, cantidad: juego.cantidad + cantidad }
                        : juego;
                })
            );
        } else {
            setCarrito([...carrito, { ...item, cantidad }]);
        }
    };

    const plusProduct = (id, stock) => {
        let modificador = [...carrito];
        let index = modificador.indexOf(id);
        console.log(index);
        let objeto = carrito.filter((juego) => juego.id === id);
        console.log(objeto[0]);
        if (objeto[0].cantidad < stock) {
            objeto[0].cantidad = objeto[0].cantidad + 1;
            console.log(objeto[0]);
            modificador[index] = objeto[0];
            setCarrito(modificador);
        }
    };

    const sustProduct = (id) => {
        let modificador = [...carrito];
        let index = modificador.indexOf(id);
        console.log(index);
        let objeto = carrito.filter((juego) => juego.id === id);
        console.log(objeto[0]);
        if (objeto[0].cantidad > 1) {
            objeto[0].cantidad = objeto[0].cantidad - 1;
            console.log(objeto[0]);
            modificador[index] = objeto[0];
            setCarrito(modificador);
        }
    };

    const totalPrice = () => {
        return carrito.reduce(
            (acumulador, act) => acumulador + act.cantidad * act.precio,
            0
        );
    };

    const totalProducts = () =>
        carrito.reduce((acumulador, juego) => acumulador + juego.cantidad, 0);

    return (
        <CartContext.Provider
            value={{
                clear,
                isInCart,
                removeItem,
                addItem,
                totalPrice,
                totalProducts,
                plusProduct,
                sustProduct,
                carrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
