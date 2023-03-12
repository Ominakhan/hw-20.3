import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const MealItem = ({ item }) => {
  return (
    <StyledLi>
      <StyledInfoCard>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Price>${item.price}</Price>
      </StyledInfoCard>
      <MealItemForm id={item._id} title={item.title} price={item.price} />
    </StyledLi>
  );
};

export default MealItem;

const Title = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #ad5502;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #d6d6d6;

  :last-child {
    border-bottom: none;
  }
`;

const StyledInfoCard = styled.div`
  margin-bottom: 1.25rem;
`;
