// src/App.js

import React, {Component} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignPage from "./pages/SignPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import NotFound from "./NotFound";
import ProductPage from "./pages/ProductPage";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/profile/" element={<ProfilePage/>}></Route>
          <Route path="/sign/" element={<SignPage/>}></Route>
          <Route path="/product/:productId" element={<ProductPage/>}></Route>
          {/* <Route path="/product/:productId" search="productName&q=demo#test" element={<ProductPage/>}></Route> */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
