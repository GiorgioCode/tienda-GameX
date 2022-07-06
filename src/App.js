import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />        
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
    </>
    
  );
};

export default App;
