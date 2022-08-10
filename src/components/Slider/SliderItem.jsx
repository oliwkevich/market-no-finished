import React from "react";
import styled from "styled-components";

export const SliderItem = ({ title, desc, btn, img, bg }) => {
  return (
    <Slider bg={bg}>
      <div className="img-container">
        <img src={img} alt="img" />
      </div>
      <div className="info-container">
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>ПОДИВИТИСЬ</button>
      </div>
    </Slider>
  );
};

const Slider = styled.div`
  background-color: #${(prors) => prors.bg};
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .img-container {
    flex: 1;
    margin-top: 40px;
    height: 100%;
    img {
      height: 80%;
    }
  }
  .info-container {
    flex: 1;
    padding: 50px;
    h1 {
      font-size: 70px;
    }
    p {
      margin: 50px 0px;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 3px;
    }
    button {
      padding: 10px;
      font-size: 20px;
      background-color: transparent;
      cursor: pointer;
      :hover {
        background-color: black;
        color: white;
        transition: all 0.3s ease;
      }
    }
  }
`;
