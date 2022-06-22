import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

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
    </div>
  );
};

export default App;
