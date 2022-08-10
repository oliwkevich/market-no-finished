import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderItems } from "../data";
import { SliderItem } from "./SliderItem";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);

  const handleClick = (side) => {
    if (side === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <div className="arrow-l" onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slider, index) => (
          <SliderItem
            key={index}
            title={slider.title}
            desc={slider.desc}
            img={slider.img}
            bg={slider.bg}
          />
        ))}
      </Wrapper>
      <div className="arrow-r" onClick={() => handleClick("right")}>
        <AiOutlineArrowRight />
      </div>
    </Container>
  );
};

// STYLES
const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;

  .arrow-l {
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    :hover {
      background-color: #b68e8e;
    }
  }
  .arrow-r {
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    :hover {
      background-color: #b68e8e;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
