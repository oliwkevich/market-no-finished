import React from "react";
import styled from "styled-components";

export const Register = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1>РЕГІСТРАЦІЯ:</h1>
        <form action="">
          <input placeholder="Введіть імя" />
          <input placeholder="Введіть прізвище" />
          <input placeholder="Введіть пошту" />
          <input placeholder="Введіть пароль" />
          <input placeholder="Підтвердіть пароль" />
          <p>
            При створенні аккаунту, ви походжуєтесь з усім правилами сайту, якщо
            ви ще не прочитали їх, то натисніть <b>УМОВИ ТА ПОЛІТИКА САЙТУ</b>
          </p>
          <button>ВПЕРЕД</button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 40%;
    padding: 20px;
    background-color: white;
    h1 {
      font-size: 24px;
      font-weight: 300;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    input {
      flex: 1;
      min-width: 40%;
      margin: 20px 10px 0 0;
      padding: 10px;
    }
    p {
      font-size: 12px;
      margin: 20px 0;
      b {
        cursor: pointer;
        color: blue;
      }
    }

    button {
      width: 40%;
      border: none;
      padding: 15px 20px;
      background-color: teal;
      color: white;
      cursor: pointer;
    }
  }
`;
