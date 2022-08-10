import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Footer, NewsLater } from "../components";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/slices/cartSlice";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState(null);
  const [size, setSize] = React.useState(null);

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQty = (name) => {
    if (name === "inc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    console.log(product);
  };

  return (
    <>
      <Container>
        <div className="wrapper">
          <div className="img-container">
            <img src={product.image} alt={product.desc} />
          </div>
          <div className="info-container">
            <h1>{product.title}</h1>
            <p>{product.desc}</p>
            <span>{product.price} грн.</span>
            <FilterContainer>
              <Filter>
                <FilterTitle>КОЛІР</FilterTitle>
                {product.color?.map((obj) => (
                  <FilterColor
                    color={obj}
                    key={obj}
                    onClick={() => setColor(obj)}
                  />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>РОЗМІР</FilterTitle>
                <select onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </select>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <IoMdAdd
                  onClick={() => handleQty("inc")}
                  cursor={"pointer"}
                  fontSize={25}
                />
                <Amount>{quantity}</Amount>
                <IoMdRemove
                  onClick={() => handleQty("dec")}
                  cursor={"pointer"}
                  fontSize={25}
                />
              </AmountContainer>
              <Button onClick={handleClick}>ДОДАТИ В КОРЗИНУ</Button>
            </AddContainer>
          </div>
        </div>
      </Container>
      <NewsLater />
      <Footer />
    </>
  );
};

const Container = styled.div`
  .wrapper {
    padding: 50px;
    display: flex;

    .img-container {
      flex: 1;
      img {
        width: 100%;
        height: 90vh;
        object-fit: cover;
      }
    }

    .info-container {
      flex: 1;
      padding: 0 50px;
      h1 {
        font-weight: 200;
      }

      p {
        margin: 20px 0;
      }

      span {
        font-weight: 100;
        font-size: 40px;
      }
    }
  }
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 50px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;
  select {
    margin-left: 10px;
    padding: 5px;
  }
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
