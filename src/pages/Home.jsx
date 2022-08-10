import React from "react";
import { Categories, Footer, NewsLater, Products, Slider } from "../components";

export const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <NewsLater />
      <Footer />
    </div>
  );
};
