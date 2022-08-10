import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProductItem } from "../components/Cart/ProductItem";
import { Footer } from "../components/Footer";
import StripeCheckuot from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProducts } from "../redux/slices/cartSlice";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const KEY =
    "pk_test_51LUXPxI3AyQlL1u22HdZzGuZjKbOhR3Ss14L8kVwcakGrWKdRQcFYiBHFlwZTYrdpMwIjHzXlMFS2owm7fTl950900xxRIC84y";
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = React.useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  React.useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.totalPrice * 100,
        });
        dispatch(removeProducts());
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeReq();
  }, [stripeToken, cart.totalPrice, navigate]);

  return (
    <Container>
      <div className="wrapper">
        <h1>ТВІЙ КОШИК</h1>
        <div className="top">
          <button className="cont-shop">Продовжити Шоппінг</button>
          <div className="texts">
            <p>Основний список (2)</p>
            <p>Список бажань (0)</p>
          </div>
          <button className="check-out">Продовжити купівлю</button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.products?.map((obj) => (
              <ProductItem
                image={obj.image}
                title={obj.title}
                id={obj._id}
                size={obj.size}
                price={obj.price * obj.quantity}
                qty={obj.quantity}
                color={obj.color}
                key={obj}
              />
            ))}
          </div>
          <div className="summary">
            <h3>ПІДСУМОК</h3>
            <div className="summary-container">
              <p>Ціна предметів:</p>
              <span>{cart.totalPrice} грн</span>
            </div>
            <div className="summary-container">
              <p>Урахуання ПДВ:</p>
              <span>50 грн</span>
            </div>
            <div className="summary-container">
              <p>Дисконтна знижка:</p>
              <span>-50 грн</span>
            </div>
            <div className="summary-container total">
              <p>Загальна сумма:</p>
              <span>{cart.totalPrice} грн</span>
            </div>
            <StripeCheckuot
              name="MEOLEX MARKET"
              billingAddress
              shippingAddress
              description={`Сума вашого заказу: ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
              // key=
            >
              <button>Перейти до каси</button>
            </StripeCheckuot>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  .wrapper {
    padding: 20px;
    h1 {
      font-weight: 300;
      text-align: center;
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      .texts {
        display: flex;
        p {
          text-decoration: underline;
          cursor: pointer;
          margin: 0 10px;
        }
      }

      button {
        padding: 10px;
        font-weight: 600;
        text-transform: uppercase;
      }

      button.cont-shop {
        border: solid 2px black;
        background-color: transparent;
        color: black;
        cursor: pointer;
        &:hover {
          background-color: black;
          color: white;
        }
      }
      button.check-out {
        border: none;
        background-color: black;
        color: white;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .info {
        flex: 3;
      }
      .summary {
        flex: 1;
        border: 0.5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 50vh;
        h3 {
          font-weight: 200;
          text-decoration: underline;
        }
        .summary-container {
          margin: 30px 0px;
          display: flex;
          justify-content: space-between;
          p {
          }
          span {
          }
        }
        .total {
          font-weight: 500;
          font-size: 24px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: black;
          color: white;
          font-weight: 600;
          cursor: pointer;
          &:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }
`;
