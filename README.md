![Logo](https://firebasestorage.googleapis.com/v0/b/gamex-store.appspot.com/o/GameX-Logo.png?alt=media&token=7b327faf-1161-4da1-9680-d3114cb53bdd)

# Tienda de venta de juegos realizada con React.js

En este proyecto se ha desarrollado una tienda de videojuegos con capacidad de filtrado de los mismos segun sus caracteristicas, pudiendo observarse detalles y videos de los juegos disponibles, como tambien su stock disponible, su precio e informacion variada de los mismos.

-   Deploy: https://gamex-store.vercel.app/

---

# Tareas realizadas

-   Se implementó uso de LocalStorage para almacenamiento y actualizacion local del carrito
-   Se realizó el desarrollo teniendo en cuenta diseño responsive
-   El proyecto fue desarrollado como una SPA, utilizando ReactRouter para realizar las rutas.
-   Se implementó tratamiento de ERROR 404 con pagina personalizada con vinculo a la pagina principal.
-   Se utiliza un loader personalizado (pacman) mientras las paginas cargan los componentes.
-   Se desarrolló una tabla de resumen de compra.
-   En la vista de carrito, se implementó la funcion de poder modificar cantidades de los objetos seleccionados, modificandose tambien los precios de subtotales tanto en la tarjeta de selección como en la table de resumen.
-   En la vista Checkout, se implemento un sistema de verificacion de tarjeta de credito.
-   Funcion de impresion de comprobante de compra en vista Checkout (provisorio)
-   vista de filtrado por categorias, las cuales se generan en forma dinamica desde base de datos.

# Recursos utilizados

-   HTML5, CSS3, JavaScript
-   TailwindCSS
-   DaisyUI
-   Firebase (Storage y Cloud Firestore)
-   Libreria React.js
-   Libreria React-credit-cards
-   Libreria React Router v6

---

# Paleta de colores:

![Paleta](https://raw.githubusercontent.com/GiorgioCode/tienda-GameX/master/src/paleta-GameX.png)

---

# Video de presentacion y demostración de uso:

[![VER EJEMPLO](https://firebasestorage.googleapis.com/v0/b/gamex-store.appspot.com/o/ver_youtube.png?alt=media&token=ffe34a3d-e5d2-420d-9ec7-cc316b91452e)](https://www.youtube.com/watch?v=f5vY-XDUIYc)

---

# Para ejecutar servidor de desarrollo de React e iniciar proyecto:

Este proyecto se inició con Create React App.

Deberás tener instalado Node.js en tu sistema (descargar Node.js).

Para instalar las dependencias, en el directorio del proyecto ejecute:

> npm install

Para utilizar la aplicación en el modo de desarrollo, ejecute:

> npm start

Abra http://localhost:3000 para verla en su navegador.

La página se volverá a cargar cuando realice cambios.
