import axios from "axios";
import React from "react";
import styled from "styled-components";
import { ProductItem } from "./ProductItem";

export const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:3003/api/products?category=${category}`
            : "http://localhost:3003/api/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  React.useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  React.useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((obj, index) => (
            <ProductItem key={index} item={obj} />
          ))
        : products
            .slice(0, 8)
            .map((obj, index) => <ProductItem key={index} item={obj} />)}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
