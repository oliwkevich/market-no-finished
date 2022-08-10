import React from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";

export const NewsLater = () => {
  return (
    <Container>
      <h1 className="title">ХОЧЕШ ЗНИЖКИ?</h1>
      <p className="desc">
        Підписуйся на новини, та будь в курсі знижок найпершим:
      </p>
      <div className="input-cont">
        <input placeholder="Введіть свою пошту" type="text" />
      <button>
        <IoMdSend fontSize={26} />
      </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    font-size: 70px;
    margin-bottom: 20px;
  }
  .desc {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  .input-cont {
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    input {
      border: none;
      flex: 8;
      padding-left: 20px;
      outline: none;
    }
    button {
      flex: 2;
      border: none;
      background-color: teal;
      color: white;
      transform: scale(1.05)
    }
  }
`;
