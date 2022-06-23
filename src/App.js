import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero
        greetings="¡Bienvenid@s a Game X !"
        slogan="de Gamers para Gamers"
      />
      <ItemListContainer />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
