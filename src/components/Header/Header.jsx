import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Announcement } from "../Header/Announcement";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const Header = () => {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <>
      <Announcement />
      <Container>
        <div className="wrapper">
          <div className="left">
            <span className="language">UA</span>
            <div className="search-container">
              <input className="input" type="text" placeholder="Пошук..." />
              <AiOutlineSearch />
            </div>
          </div>
          <div className="center">
            <h1 className="logo">
              <Link to="/">MARKET</Link>
            </h1>
          </div>
          <div className="right">
            <ul className="list">
              <li className="li1">
                <Link to="/register">REGISTER</Link>
              </li>
              <Link to="login">
                <li>LOGIN</li>
              </Link>
              <Link to="/cart">
                <div className="cart">
                  <AiOutlineShoppingCart
                    cursor={"pointer"}
                    fontSize={24}
                    color="gray"
                  />
                  <span>{quantity}</span>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

// STYLES
const Container = styled.div`
  height: 60px;
  .wrapper {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    display: flex;
    flex: 1;
    align-items: center;
    .language {
      font-size: 14px;
      cursor: pointer;
      ${mobile({ display: "none" })}
    }
    .search-container {
      border: 1px solid lightgray;
      display: flex;
      align-items: center;
      margin-left: 25px;
      padding: 5px;

      .input {
        border: none;
        outline: none;
        ${mobile({ width: "50px" })}
      }
    }
  }
  .center {
    flex: 1;
    text-align: center;
    .logo {
      font-weight: bold;
      cursor: pointer;
      ${mobile({ fontSize: "24px" })}
    }
  }
  .right {
    flex: 1;
    .list {
      justify-content: space-between;
      align-items: center;
      display: flex;
      ${mobile({ justifyContent: "center" })}
      li {
        list-style: none;
        cursor: pointer;
      }
      .li1 {
        margin-left: 150px;
      }
      .cart {
        display: flex;
        span {
          height: 15px;
          width: 15px;
          background-color: blue;
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
        }
      }
    }
  }
`;
