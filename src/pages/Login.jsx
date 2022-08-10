import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log({ username, password });
  };

  return (
    <Container>
      <div className="wrapper">
        <h1>АВТОРИЗАЦІЯ:</h1>
        <form action="">
          <input
            placeholder="Введіть логін"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Введіть пароль"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} disabled={isFetching}>
            УВІЙТИ
          </button>
          {error && <p>[ПОМИЛКА]: Спробуйте пізніше</p>}
          <Link to="#">Забули пароль?</Link>
          <Link to="#">Немає акканту? Створити</Link>
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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 25%;
    padding: 20px;
    background-color: white;
    h1 {
      font-size: 24px;
      font-weight: 300;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      flex: 1;
      min-width: 40%;
      margin: 10px 0;
      padding: 10px;
    }

    p {
      font-size: 16px;
      padding: 10px;
      background-color: red;
      border-radius: 10px;
    }

    button {
      width: 40%;
      border: none;
      padding: 15px 20px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin-bottom: 10px;
      &:disabled {
        color: green;
        cursor: not-allowed;
      }
    }

    a {
      margin: 5px 0;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      color: black;
      text-transform: uppercase;
    }
  }
`;
