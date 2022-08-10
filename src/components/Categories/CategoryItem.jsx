import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt={item.title} />
        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button>КУПИТИ</button>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  flex: 1;
  margin: 3px;
  height: 70vh;
  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: white;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    border: none;
    padding: 10px;
    background-color: #fff;
    color: gray;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: transparent;
      border: 1px solid black;
      transition: all 0.3s ease;
    }
  }
`;
