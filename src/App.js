import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Navbar />

      <Slider/>
      <ItemListContainer />
      <Carrousel />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
