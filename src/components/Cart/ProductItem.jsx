import React from "react";
import styled from "styled-components";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export const ProductItem = ({ image, title, id, size, price, qty, color }) => {
  return (
    <Container>
      <div className="product">
        <div className="product-detail">
          <img src={image} alt={title} />
          <div className="details">
            <span>
              <b>Продукт:</b> {title}
            </span>
            <span>
              <b>ID:</b> {id}
            </span>
            <ProductColor color={color} />
            <span>
              <b>Розмір:</b> {size}
            </span>
          </div>
        </div>
        <div className="price-detail">
          <div className="amount-container">
            <IoMdAdd cursor={"pointer"} />
            <span>{qty}</span>
            <IoMdRemove cursor={"pointer"} />
          </div>
          <p>{price} грн</p>
        </div>
      </div>
      <hr/>
    </Container>
  );
};

const Container = styled.div`
    hr {
        background-color: #eee;
        border: none;
        height: 1px;
    }
  .product {
    display: flex;
    justify-content: space-between;
    .product-detail {
      flex: 2;
      display: flex;

      img {
        width: 200px;
      }
      .details {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        span {
        }
      }
    }
    .price-detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .amount-container {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span {
          font-size: 24px;
          margin: 5px;
        }
        p {
          font-size: 30px;
          font-weight: 200;
        }
      }
    }
  }
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px 0;
`;
