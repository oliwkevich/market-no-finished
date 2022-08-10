import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import {
  Cart,
  CategoryPage,
  Home,
  Login,
  ProductPage,
  Register,
  Success,
} from "./pages";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products/:id" element={<CategoryPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
