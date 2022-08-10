import React from "react";
import styled from "styled-components";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const ProductItem = ({ item }) => {
  return (
    <Container>
      <div className="circle"></div>
      <img src={item.image} alt="clothes" />
      <div className="info">
        <div className="icon">
          <AiOutlineShoppingCart />
        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`}>
            <AiOutlineSearch />
          </Link>
        </div>
        <div className="icon">
          <AiOutlineHeart />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover .info {
    opacity: 1;
    transition: all 0.5s ease;
  }
  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
  }
  img {
    height: 75%;
    z-index: 2;
  }
  .info {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
    }
  }
`;
