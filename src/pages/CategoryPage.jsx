import React from "react";
import styled from "styled-components";
import { Footer, NewsLater, Products } from "../components";
import { useLocation } from "react-router-dom";

export const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const categoryName = {
    woman: "Жіночий",
    coat: "Шовк",
    jeans: "Куртки",
  };

  return (
    <>
      <Container>
        <h1>{categoryName[category]}</h1>
        <div className="filter-container">
          <div className="filter">
            <span>Фільтр:</span>
            <Select name="color" onChange={handleFilters}>
              <Option>білий</Option>
              <Option>чорний</Option>
              <Option>червоний</Option>
              <Option>голубий</Option>
              <Option>жовтий</Option>
              <Option>зелений</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </div>
          <div className="filter">
            <span>Сортування:</span>
            <Select name="sort" onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">самі новіші</Option>
              <Option value="asc">по ціні (asc)</Option>
              <Option value="desc">по ціні (desc)</Option>
            </Select>
          </div>
        </div>
      </Container>
      <Products category={category} filters={filters} sort={sort} />
      <NewsLater />
      <Footer />
    </>
  );
};

const Container = styled.div`
  h1 {
    margin: 20px;
  }
  .filter-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .filter {
      margin: 20px;
      span {
        font-size: 20px;
        font-weight: 600;
        margin-right: 20px;
      }
    }
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;
