import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignin from "./Pages/LoginSignin";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import Banner_women from './Components/Assets/banner_women.png'
import Banner_mens from './Components/Assets/banner_mens.png'
import Banner_kids from './Components/Assets/banner_kids.png'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={Banner_mens} category="men"/>} />
          <Route path="/womens" element={<ShopCategory banner={Banner_women} category="women"/>} />
          <Route path="/kids" element={<ShopCategory banner={Banner_kids} category="kid"/>} />
          <Route path="/product" element={<Product/>} >
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/login" element={<LoginSignin/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
