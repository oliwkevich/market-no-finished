import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

export const Categories = () => {
  return (
    <Container>
      {categories.map((obj, index) => (
        <CategoryItem key={index} item={obj} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
