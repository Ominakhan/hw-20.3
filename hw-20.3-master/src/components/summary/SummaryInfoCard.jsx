import React from "react";
import styled from "styled-components";

const SummaryInfoCard = () => {
  return (
    <>
      <MealsCard>
        <Title>Delicious Food, Delivered To You</Title>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </MealsCard>
    </>
  );
};

export default SummaryInfoCard;

const MealsCard = styled.div`
  text-align: center;
  margin: -160px auto auto;
  background-color: #383838;
  border-radius: 14px;
  position: relative;
  box-shadow: 0 .0625rem 1.125rem .625rem rgb(0 0 0 / 25%);
  width: 854px;
  height: 270px;
  color: #fff;
  display: grid;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`;
