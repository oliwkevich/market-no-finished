import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export const Footer = () => {
  return (
    <Container>
      <div className="left">
        <h1>MARKET.</h1>
        <p>
          Ви завжди можете знайти нас в одних із соц. мереж, які вказані нижче.
          Якщо ви переходите в соц. мережу, будьте акуртані, бо там дуже
          красиво. І не забудь підписатись, дякуємо.
        </p>

        <div className="social-cont">
          <div className="social-ico">
            <AiFillFacebook />
          </div>
          <div className="social-ico">
            <AiOutlineInstagram />
          </div>
          <div className="social-ico">
            <BsTelegram />
          </div>
          <div className="social-ico">
            <SiGmail />
          </div>
        </div>
      </div>
      <div className="center">
        <h3>ПОСИЛАННЯ:</h3>
        <ul>
          <li>Головна</li>
          <li>Кошик</li>
          <li>Чоловічий одяг</li>
          <li>Жіночий одяг</li>
          <li>Аксесуари</li>
          <li>Мій аккаунт</li>
          <li>Вподобання</li>
          <li>Правила та конфіденційність</li>
        </ul>
      </div>
      <div className="right">
        <h3>КОНТАКТИ:</h3>
        <div className="contact-item">
          <FaMapMarkerAlt style={{marginRight: '10px'}}/>
          <p>Ukraine, 90300, Vynohradiv</p>
        </div>
        <div className="contact-item">
          <FiPhoneCall style={{marginRight: '10px'}}/>
          <p>+ 36 20 535 0121</p>
        </div>
        <div className="contact-item">
          <AiOutlineMail style={{marginRight: '10px'}}/>
          <p>olishkevich123@gmail.com</p>
        </div>
        <img src='https://i.ibb.co/Qfvn4z6/payment.png' alt="payments" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    h1 {
    }
    p {
      margin: 20px 0px;
      color: gray;
    }
    .social-cont {
      display: flex;
      .social-ico {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: lightgrey;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
  .center {
    flex: 1;
    padding: 20px;
    h3 {
      margin-bottom: 30px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    li {
      width: 50%;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
  .right {
    flex: 1;
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }
    .contact-item {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      p {
      }
    }
    img {
      width: 50%;
    }
  }
`;
